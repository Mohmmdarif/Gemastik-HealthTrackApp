import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, NativeBaseProvider, ScrollView, Button, Link } from 'native-base'


import { icons, components } from '../../constants'
import { router } from 'expo-router'

const SignIn = () => {
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full justify-center min-h-[100vh] px-4">
            <Text className="font-pbold text-2xl mb-3">Masuk Akun</Text>
            <Text className="font-pregular text-sm">Dapatkan akses cepat dan mudah ke rumah sakit dan layanan medis.</Text>
            <View className="mt-[51px]">
              <Box w="100%" maxWidth="full">
                {/* Input Email */}
                <components.DefaultInput title="Email" />

                {/* Input Password */}
                <components.InputPassword title="Password" style="mt-3" />
              </Box>
            </View>

            {/* Horizontal Line */}
            <components.HorizontalLine />

            {/* Icon Button */}
            <View className="mt-8 flex-row justify-center gap-x-5">
              <Box>
                <components.ButtonLinkIcon href="/#" source={icons.googleIcon} styleIcon="w-7 h-7" />
              </Box>
              <Box>
                <components.ButtonLinkIcon href="/#" source={icons.facebookIcon} styleIcon="w-7 h-7" />
              </Box>
            </View>

            <Button className="bg-primary h-[44px] mt-8 rounded-xl" block>
              <Text className="text-white font-psemibold text-lg">Masuk</Text>
            </Button>
            <View className="mt-2 flex-row items-center justify-center">
              <Text className="font-pregular text-sm">Belum punya Akun ?
              </Text>
              <Pressable onPress={() => router.push("/sign-up")}>
                <Text className="font-psemibold text-sm underline"> Daftar</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default SignIn