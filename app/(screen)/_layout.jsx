import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const ScreenLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="HospitalRecomendation" options={{
          headerShown: true,
          title: "Rumah sakit terdekat",
        }} />
      </Stack>

      <StatusBar style="auto" />
    </>
  )
}

export default ScreenLayout