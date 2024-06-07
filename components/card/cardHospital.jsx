import React from 'react';
import { Box, Text, HStack, VStack, Image } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const HospitalCard = () => {
  return (
    <Box
      flexDirection="row"
      borderRadius={20}
      overflow="hidden"
      shadow={2}
      bg="white"
      maxWidth="95%"
      mx="auto"
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        alt="Hospital"
        resizeMode="ccover"
        width="40%"
      />
      <Box bg="violet.600" flex={1} p={4} justifyContent="center">
        <Text color="white" className="font-psemibold text-sm">
          RS. Tadika Medika
        </Text>
        <Text color="white" mb={2}>
          Telepon (021-3283-328)
        </Text>
        <HStack space={2}>
          <Box bg="white" borderRadius="full" flexDirection="row" alignItems="center" justifyContent="center" h={8} px={2}>
            <MaterialIcons name="location-pin" size={20} color="black" />
            <Text className="font-pmedium text-xs">4.3 km</Text>
          </Box>
        </HStack>
        <HStack space={2} alignItems="center">
          <MaterialCommunityIcons name="clock-outline" size={24} color="white" />
          <Text color="white">08:00 - 20:00</Text>
        </HStack>
        <HStack space={2} alignItems="center">
          <Ionicons name="star" size={24} color="yellow" />
          <Text color="white">4.2/5</Text>
        </HStack>
      </Box >
    </Box >
  );
};

export default HospitalCard;
