import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, FormControl, Input, NativeBaseProvider, ScrollView, Stack, WarningOutlineIcon, Button } from 'native-base'

import { icons } from '../../constants'

const SignIn = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full justify-center min-h-[85vh] px-4">
            <Text className="font-pbold text-2xl mb-3">Masuk Akun</Text>
            <Text className="font-pregular text-sm">Dapatkan akses cepat dan mudah ke rumah sakit dan layanan medis.</Text>
            <View className="mt-[51px]">
              <Box w="100%" maxWidth="full">

                {/* Input Email */}
                <FormControl isRequired>
                  <Stack>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="text" placeholder="Email" />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                      Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>

                {/* Input Password */}
                <FormControl className="mt-[29px]" isRequired>
                  <Stack>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" placeholder="Password" />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                      Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                  </Stack>
                </FormControl>
              </Box>
            </View>

            <View className="flex-row justify-around items-center mt-10">
              <View className="h-[1px] bg-[#DADADA] w-[40%]" />
              <Text className="text-center font-pregular text-sm">atau</Text>
              <View className="h-[1px] bg-[#DADADA] w-[40%]" />
            </View>

            <View className="flex-row gap-10 justify-center mt-0">
              <Pressable onPress={() => router.push("/#")} className="bg-[#F4EFF6] p-4 rounded-full">
                <Image source={icons.googleIcon} resizeMode="contain" className="w-7 h-7" />
              </Pressable>
              <Pressable onPress={() => router.push("/#")} className="bg-[#F4EFF6] p-4 rounded-full">
                <Image source={icons.facebookIcon} resizeMode="contain" className="w-7 h-7" />
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default SignIn