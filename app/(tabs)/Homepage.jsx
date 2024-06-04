import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Image, NativeBaseProvider, ScrollView } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'

import { icons, images } from '../../constants'
import Search from '../search/[query]'

const Homepage = () => {
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
                <Text className="text-white text-sm font-pregular">Cilandak, Jakarta Selatan</Text>
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