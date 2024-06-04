import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { components } from '../../constants'


const Urgent = () => {
  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView className="h-full">
          <components.MapView />
          <components.BottomSheetComp />
        </GestureHandlerRootView>
      </View>
    </NativeBaseProvider>
  )
}

export default Urgent