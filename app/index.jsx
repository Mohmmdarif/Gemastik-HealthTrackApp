import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, Pressable } from 'react-native';
import { Link, router } from 'expo-router';

import { images, icons } from '../constants'
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="h-full justify-between bg-white">
      <View className="pt-14 px-4">
        <Text className="text-2xl font-pbold">Dapatkan</Text>
        <Text className="text-2xl font-pbold">Informasi Kesehatan</Text>
        <Text className="text-2xl font-pbold">yang Anda Butuhkan,</Text>
        <Text className="text-2xl font-pbold">Saat Anda Membutuhkannya!</Text>
      </View>
      <View className="flex justify-center items-center">
        <Image source={images.coverWelcomeScreen} resizeMode="contain" className="flex justify-end relative" />
        <Pressable onPress={() => router.push("/HospitalRecomendation")} className="absolute bg-primary p-6 rounded-full bottom-24">
          <Image source={icons.rightArrow} resizeMode="contain" className="w-5 h-5" />
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}