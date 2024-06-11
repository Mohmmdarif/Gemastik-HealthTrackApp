import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Alert, CloseIcon, HStack, IconButton, NativeBaseProvider, ScrollView, StatusBar, VStack } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import HospitalCard from '../components/card/cardHospital'

import supabase from '../supabase'
import { getPreciseDistance } from 'geolib';
import * as Location from 'expo-location';

import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'


const HospitalRecomendation = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [hospitals, setHospitals] = useState([]);
  const [distance, setDistance] = useState([]);
  const [location, setLocation] = useState();
  // const location = useLocation();

  const route = useRoute();
  const { formData } = route.params;

  // console.log(hospitals)

  const router = useRouter();

  const toastInfo = {
    title: "Berhasil!",
    description: "Data berhasil terkirim ke rumah sakit terdekat, silahkan tunggu konfirmasi dari rumah sakit.",
    variant: "solid",
    isClosable: true,
  }

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

  const handleSubmit = async (hospital_id) => {
    try {
      const updatedFormData = { ...formData, hospital_id };
      const { data, error } = await supabase
        .from('trackingforpeople')
        .insert([updatedFormData]);

      if (error) {
        throw error;
      }
      console.log('Data inserted successfully');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        router.push('/History');
      }, 3000);
    } catch (error) {
      console.error('Error posting data', error);
    }
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

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Please grant permission');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
    getPermission();
  }, [])

  return (
    <NativeBaseProvider>
      {showAlert && (
        <Alert position={'absolute'} zIndex={5} maxWidth="100%" alignSelf="center" flexDirection="row" status={'success'} variant={'solid'}>
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" className="text-white font-pmedium" fontWeight="medium" flexShrink={1} color={toastInfo.variant === "solid" ? "lightText" : toastInfo.variant !== "outline" ? "darkText" : null}>
                  {toastInfo.title}
                </Text>
              </HStack>
              {toastInfo.isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
                color: toastInfo.variant === "solid" ? "lightText" : "darkText"
              }} onPress={() => setShowAlert(false)} /> : null}
            </HStack>
            <Text className="text-white font-pregular" px="6" color={toastInfo.variant === "solid" ? "lightText" : toastInfo.variant !== "outline" ? "darkText" : null}>
              {toastInfo.description}
            </Text>
          </VStack>
        </Alert>
      )}
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
                    onPress={() => handleSubmit(hospital.id)}
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