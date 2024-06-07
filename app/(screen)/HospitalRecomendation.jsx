import { View, Text } from 'react-native'
import React from 'react'
import { Box, NativeBaseProvider, ScrollView, StatusBar } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import HospitalCard from '../../components/card/cardHospital'

const HospitalRecomendation = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full min-h-[100vh] px-4">
            <HospitalCard />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  )
}

export default HospitalRecomendation