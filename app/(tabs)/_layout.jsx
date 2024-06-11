import { Tabs } from 'expo-router'
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../constants'
import { NativeBaseProvider, Button, Modal, Box, Pressable } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { images } from '../../constants'

const TabIcons = ({ icon, color, name, focused, style }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={style ? { tintColor: color, width: 30, height: 30 } : { tintColor: color, width: 24, height: 24 }}
        resizeMode='contain'
      />
      <Text style={[styles.iconText, { color: color }, focused ? styles.iconTextFocused : null]}>{name ? name : null}</Text>
    </View>
  )
}

const TabsLayout = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleUrgentTabPress = () => {
    setIsModalVisible(true);
  }

  const handleModalClose = () => {
    setIsModalVisible(false);
  }

  const handlePress = (path, value) => {
    handleModalClose();
    navigation.navigate(path, { value });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#701AF5',
            tabBarInactiveTintColor: '#B1B1B1',
            tabBarStyle: {
              backgroundColor: '#FFFFFF',
              height: 60
            },
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
            name="Urgent"
            options={{
              title: 'Urgent',
              headerShown: false,
              tabBarIcon: (props) => (

                <TouchableOpacity {...props}
                  onPress={handleUrgentTabPress}>
                  <View className="items-center justify-center bg-[#701AF5]" style={{
                    width: Platform.OS == "android" ? 70 : 50,
                    height: Platform.OS == "android" ? 70 : 50,
                    top: Platform.OS == "android" ? -30 : -10,
                    borderRadius: Platform.OS == "android" ? 100 : 25,
                    padding: 2,
                  }}>
                    <View className="mt-2">
                      <TabIcons
                        icon={icons.urgent}
                        color={props.focused ? '#fff' : '#fff'}
                        focused={props.focused}
                        style
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
          <Tabs.Screen
            name="History"
            options={{
              title: 'History',
              headerShown: true,
              tabBarIcon: ({ color, focused }) => (
                <TabIcons
                  icon={icons.historyIcon}
                  color={color}
                  name="Riwayat"
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

        <Modal isOpen={isModalVisible} onClose={handleModalClose}>
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Pakai ini untuk siapa?</Modal.Header>
            <Modal.Body className="h-32 flex-row justify-center items-center gap-2.5">
              <Pressable onPress={() => handlePress("Urgent", "pribadi")} className="w-[120px] shadow-md shadow-gray-400 bg-white rounded-[12px] p-2">
                <Box className="flex-col justify-center items-center">
                  <Image source={images.ManImage} alt='Man Image' className="w-8 h-8 mb-1" />
                  <Text className="text-md font-psemibold">Pribadi</Text>
                </Box>
              </Pressable>
              <Pressable onPress={() => handlePress("Urgent", "oranglain")} className="w-[120px] shadow-md shadow-gray-400 bg-white rounded-[12px] p-1">
                <Box className="flex-col justify-center items-center">
                  <Image source={images.TeamImage} alt='Team Image' className="w-10 h-10 mb-1" />
                  <Text className="text-md font-psemibold">Orang lain</Text>
                </Box>
              </Pressable>
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </NativeBaseProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconText: {
    fontSize: 14,
  },
  iconTextFocused: {
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default TabsLayout
