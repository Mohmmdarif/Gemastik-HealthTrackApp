import { View, Text } from 'react-native'
import React, { useMemo } from 'react'
import BottomSheet from '@gorhom/bottom-sheet';


const BottomSheetComp = () => {
  const snapPoints = useMemo(() => ['15%', '25%', '50%', '70%', '90%'], []);

  return (
    <BottomSheet snapPoints={snapPoints} index={0} className=" w-full">
      <View>
        <Text>Bottom Sheet Content</Text>
      </View>
    </BottomSheet>
  )
}

export default BottomSheetComp