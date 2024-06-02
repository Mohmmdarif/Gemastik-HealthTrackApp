import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Box, NativeBaseProvider, ScrollView, Button, Link } from 'native-base'


import { icons, components } from '../../constants'
import { router } from 'expo-router'

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="w-full justify-center min-h-[100vh] px-4">
            <Text className="font-pbold text-2xl mb-3">Daftar Akun</Text>
            <Text className="font-pregular text-sm">Daftar sekarang dan mulailah perjalanan kesehatan Anda bersama kami.</Text>
            <View className="mt-[51px]">
              <Box w="100%" maxWidth="full">
                {/* Input Nama Lengkap */}
                <components.DefaultInput title="Nama Lengkap" />

                {/* Input Email */}
                <components.DefaultInput title="Email" style="mt-3" />

                {/* Input Password */}
                <components.InputPassword title="Password" style="mt-3" />

                {/* Input Password */}
                <components.InputPassword title="Konfirmasi Password" style="mt-3" />
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
              <Text className="text-white font-psemibold text-lg">Daftar</Text>
            </Button>
            <View className="mt-2 flex-row items-center justify-center">
              <Text className="font-pregular text-sm">Sudah punya Akun ?
              </Text>
              <Pressable onPress={() => router.push("/sign-in")}>
                <Text className="font-psemibold text-sm underline"> Masuk</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

export default SignUp