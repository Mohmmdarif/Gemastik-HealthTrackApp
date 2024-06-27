import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image, NativeBaseProvider, ScrollView } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location';

import { components, icons, images } from '../../constants'
import Search from '../search/[query]'

const Homepage = () => {
  const [locationName, setLocationName] = useState('');

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Please grant permission');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const address = reverseGeocode[0];
        const formattedAddress = `${address.district}, ${address.subregion}`;
        setLocationName(formattedAddress);
      }
    }
    getPermission();
  }, []);

  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full min-h-[100vh]">
            <Image
              source={images.backgroundRounded}
              resizeMode="contain"
              alt='background rounded'
              className="relative"
            />
            <View className="w-full px-4 absolute mt-8">
              <Text className="font-psemibold text-sm text-white mb-2">Selamat Datang,</Text>
              <Text className="font-pbold text-2xl text-white mb-2">Rafael Struick</Text>
              <View className="flex-row gap-1">
                <Image
                  source={icons.locationIcon}
                  className="w-4 h-4"
                  alt='location icon'
                />
                <Text className="text-white text-sm font-pregular">{locationName}</Text>
              </View>
              <View className="flex-row justify-center mt-24">
                <View className="w-[90%]">
                  <Search />
                </View>
              </View>
            </View>


          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}

export default Homepage



