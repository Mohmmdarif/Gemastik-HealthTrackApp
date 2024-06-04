import { View, Text } from 'react-native'
import React from 'react'
import { Pressable, Image } from 'native-base'
import { router } from 'expo-router'


const buttonLinkIcon = ({ href, source, styleIcon }) => {

  return (
    <>
      <Pressable
        onPress={() => router.push(`${href}`)}
        className="bg-[#F4EFF6] p-4 rounded-full">
        <Image
          source={typeof source === 'string' ? { uri: source } : source}
          alt='icon'
          resizeMode="contain"
          className={`${styleIcon}`} />
      </Pressable>
    </>
  )
}

export default buttonLinkIcon