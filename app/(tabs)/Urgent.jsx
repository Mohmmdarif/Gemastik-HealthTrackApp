import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Box, Button, NativeBaseProvider } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { components } from '../../constants'
import BottomSheetComp from '../../components/bottom_sheet/bottomSheet'


const Urgent = () => {
  const bottomSheetRef = useRef(null);

  useEffect(() => {
    // Contoh event yang akan membuka Bottom Sheet
    const openSheet = () => {
      bottomSheetRef.current.open();
    };

    // Membuka Bottom Sheet ketika komponen dimount
    openSheet();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView className="h-full">
          <components.MapView />
          {/* <components.BottomSheetComp /> */}
          <BottomSheetComp
            ref={bottomSheetRef}
            snapPoints={['5%', '25%', '40%', '60%']}
            content={
              <Box w="100%" maxWidth="full">

                {/* Input Poli */}
                <components.SelectInput title="Poli" />

                {/* Input Penyakit yang diobati */}
                <components.SelectInput title="Penyakit yang diobati" style="mt-3" />

                {/* Input Keterangan (optional) */}
                <components.TextareaInput title="Keterangan" style="mt-3" />

                {/* Input situasi */}
                <components.RadioInput title="Situasi" style="mt-3" />

                {/* Button */}
                <Button className="bg-primary h-[44px] mt-8 rounded-xl" block>
                  <Text className="text-white font-psemibold text-md">Cari</Text>
                </Button>
              </Box>
            }
          />
        </GestureHandlerRootView>
      </View>
    </NativeBaseProvider>
  )
}

export default Urgent