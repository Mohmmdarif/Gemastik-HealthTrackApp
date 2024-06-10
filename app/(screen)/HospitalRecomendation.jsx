import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, NativeBaseProvider, ScrollView, StatusBar } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import HospitalCard from '../../components/card/cardHospital'

import supabase from '../../supabase'
import { getPreciseDistance } from 'geolib';
import useLocation from '../../lib/hooks/useLocation'


const HospitalRecomendation = () => {
  const [hospitals, setHospitals] = useState([]);
  const [distance, setDistance] = useState([]);
  const location = useLocation();


  const calculateDistance = () => {
    if (location && hospitals.length > 0) {
      const calculatedDistance = hospitals.map(hospitals => {
        return getPreciseDistance(
          { latitude: location.latitude, longitude: location.longitude },
          { latitude: hospitals.latitude, longitude: hospitals.longitude },
        ) / 1000;
      });
      setDistance(calculatedDistance);
    }
  };

  const sortByDistance = () => {
    const sortedHospitals = [...hospitals];
    sortedHospitals.sort((a, b) => {
      const distanceA = getPreciseDistance(
        { latitude: location.latitude, longitude: location.longitude },
        { latitude: a.latitude, longitude: a.longitude }
      );
      const distanceB = getPreciseDistance(
        { latitude: location.latitude, longitude: location.longitude },
        { latitude: b.latitude, longitude: b.longitude }
      );
      return distanceA - distanceB;
    });
    return sortedHospitals;
  };


  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('hospitals')
        .select('*');

      if (error) {
        throw error;
      }

      setHospitals(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (location && hospitals.length > 0) {
      calculateDistance();
    }
  }, [location, hospitals]);

  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full min-h-[100vh] p-4">
            {
              sortByDistance().map((hospital, index) => (
                <View className="mb-2">
                  <HospitalCard
                    key={index}
                    hospital_name={hospital.name}
                    hospital_phone={hospital.phone}
                    hospital_distance={distance[hospitals.indexOf(hospital)]}
                  />
                </View>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}


export default HospitalRecomendation