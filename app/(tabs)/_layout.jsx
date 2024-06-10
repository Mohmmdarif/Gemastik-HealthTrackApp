// import { Tabs, useNavigation, useRouter } from 'expo-router'
// import { View, Image, Text, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
// import { icons } from '../../constants'
// import { Button, Modal } from 'native-base'

// const TabIcons = ({ icon, color, name, focused }) => {
//   return (
//     <View className="justify-center items-center gap-1">
//       <Image
//         source={icon}
//         tintColor={color}
//         resizeMode='contain'
//         className="w-6 h-6" />
//       <Text className={`text-xs ${focused ? 'font-psemibold' : 'font-pregular'}`} style={{ color: color }}>{name}</Text>
//     </View>
//   )
// }

// const TabsLayout = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const router = useRouter();

//   const handleUrgentTabPress = ({ navigation }) => {
//     setIsModalVisible(true);
//   }

//   const handleModalClose = () => {
//     setIsModalVisible(false);
//   }

//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: '#701AF5',
//           tabBarInactiveTintColor: '#B1B1B1',
//           tabBarStyle: {
//             backgroundColor: '#FFFFFF',
//             height: 60
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="Homepage"
//           options={{
//             title: 'Homepage',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcons
//                 icon={icons.home}
//                 color={color}
//                 name="Beranda"
//                 focused={focused}
//               />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="Urgent"
//           options={{
//             title: 'Urgent',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcons
//                 icon={icons.urgent}
//                 color={color}
//                 name="Darurat"
//                 focused={focused}
//               />
//             ),
//             tabBarOnPress: handleUrgentTabPress
//           }}
//         />
//         <Tabs.Screen
//           name="Appointment"
//           options={{
//             title: 'Appointment',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcons
//                 icon={icons.appointment}
//                 color={color}
//                 name="Janji"
//                 focused={focused}
//               />
//             )
//           }}
//         />
//         <Tabs.Screen
//           name="Profile"
//           options={{
//             title: 'Profile',
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcons
//                 icon={icons.profile}
//                 color={color}
//                 name="Profil"
//                 focused={focused}
//               />
//             )
//           }}
//         />
//       </Tabs>

//       <Modal
//         visible={isModalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={handleModalClose}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>This is an urgent action modal!</Text>
//             <Button title="Close" onPress={handleModalClose} />
//           </View>
//         </View>
//       </Modal>
//     </>
//   )
// }

// const styles = StyleSheet.create({
//   iconContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 1
//   },
//   icon: {
//     width: 24,
//     height: 24
//   },
//   iconText: {
//     fontSize: 10
//   },
//   iconTextFocused: {
//     fontWeight: '600'
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)'
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center'
//   }
// });

// export default TabsLayout

import { Tabs, router } from 'expo-router'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../constants'
import { NativeBaseProvider, Button, Modal, Box, Pressable } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { images } from '../../constants'

const TabIcons = ({ icon, color, name, focused }) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        style={{ tintColor: color, width: 24, height: 24 }}
        resizeMode='contain'
      />
      <Text style={[styles.iconText, { color: color }, focused ? styles.iconTextFocused : null]}>{name}</Text>
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
    // router.push(path, value);
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
            name="Urgent"
            options={{
              title: 'Urgent',
              headerShown: false,
              tabBarIcon: (props) => (
                <TouchableOpacity {...props}
                  onPress={handleUrgentTabPress}>
                  <TabIcons
                    icon={icons.urgent}
                    color={props.focused ? '#701AF5' : '#B1B1B1'}
                    name="Darurat"
                    focused={props.focused}
                  />
                </TouchableOpacity>
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
