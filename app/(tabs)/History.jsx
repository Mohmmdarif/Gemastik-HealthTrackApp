import { View, Text } from 'react-native'
import React from 'react'
import { VStack, Box, Divider, NativeBaseProvider, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';


const History = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="px-4">
            <Box className="border rounded-md">
              <VStack space="4" divider={<Divider />}>
                <Box px="4" pt="4">
                  NativeBase
                </Box>
                <Box px="4">
                  NativeBase is a free and open source framework that enable developers
                  to build high-quality mobile apps using React Native iOS and Android
                  apps with a fusion of ES6.
                </Box>
                <Box px="4" pb="4">
                  GeekyAnts
                </Box>
              </VStack>
            </Box>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default History