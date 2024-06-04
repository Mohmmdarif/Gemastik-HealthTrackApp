import { View, Text } from 'react-native'
import React from 'react'

const horizontalLine = () => {
  return (
    <View className="flex-row justify-around items-center mt-10">
      <View className="h-[1px] bg-[#DADADA] w-[40%]" />
      <Text className="text-center font-pregular text-sm text-[#b3afaf]">atau</Text>
      <View className="h-[1px] bg-[#DADADA] w-[40%]" />
    </View>
  )
}

export default horizontalLine