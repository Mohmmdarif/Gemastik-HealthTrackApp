import { Tabs } from 'expo-router'
import { View, Image, Text } from 'react-native'
import React from 'react'
import { icons } from '../../constants'

const TabIcons = ({ icon, color, name, focused }) => {
  return (
    <View className="justify-center items-center gap-1">
      <Image
        source={icon}
        tintColor={color}
        resizeMode='contain'
        className="w-6 h-6" />
      <Text className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="Homepage"
          options={{
            title: 'Homepage',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.home}
                color={color}
                name="Beranda"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="Urgent"
          options={{
            title: 'Urgent',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.urgent}
                color={color}
                name="Darurat"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="Appointment"
          options={{
            title: 'Appointment',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.appointment}
                color={color}
                name="Janji"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcons
                icon={icons.profile}
                color={color}
                name="Profil"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout