import React from 'react';
import { Box, Text, HStack, VStack, Image } from 'native-base';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Touchable, TouchableOpacity } from 'react-native';

const HospitalCard = ({ hospital_name, hospital_phone, hospital_distance, onPress }) => {


  const formatDistance = (distance) => {
    return distance.toFixed(1);
  };
  const distance = hospital_distance ? formatDistance(hospital_distance) : 'N/A';

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return phoneNumber;
  };
  const phoneNumber = formatPhoneNumber(hospital_phone);


  return (
    <TouchableOpacity onPress={onPress}>
      <Box className="flex-row rounded-[20px] overflow-hidden shadow-md shadow-gray-400 bg-white max-w-full">
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          alt="Hospital"
          resizeMode="cover"
          width="130px"
        />
        <Box bg="violet.600" className="flex-1 p-4 justify-center">
          <Text color="white" className="font-psemibold text-lg" numberOfLines={1}>
            {hospital_name}
          </Text>
          <Text color="white" className="mb-2 text-xs mt-[11px]">
            Telepon ({phoneNumber})
          </Text>
          <VStack className="mt-2 flex-row flex-wrap gap-1.5">
            <HStack space={2}>
              <Box bg="white" className="rounded-full flex-row items-center justify-center h-8 px-2">
                <MaterialIcons name="location-on" size={20} color="#701AF5" />
                <Text className="font-psemibold text-xs ml-1">{distance} Km</Text>
              </Box>
            </HStack>
            <HStack space={2}>
              <Box bg="white" className="rounded-full flex-row items-center justify-center h-8 px-2">
                <MaterialCommunityIcons name="clock" size={20} color="#29CD61" />
                <Text className="font-psemibold text-xs ml-1">08:00 - 22:00</Text>
              </Box>
            </HStack>
            <HStack space={2}>
              <Box bg="white" className="rounded-full flex-row items-center justify-center h-8 px-3">
                <MaterialIcons name="star" size={20} color="#FFCA28" />
                <Text className="font-psemibold text-xs ml-1">4.2/5</Text>
              </Box>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default HospitalCard;
