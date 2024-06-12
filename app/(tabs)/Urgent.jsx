import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Toast, Box, Button, HStack, NativeBaseProvider, VStack, CloseIcon, IconButton } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { components } from '../../constants'
import BottomSheetComp from '../../components/bottom_sheet/bottomSheet'
import { useRoute, useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location';

const Urgent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { value } = route.params;


  const bottomSheetRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: 'user',
    umur: 25,
    jenis_kelamin: 'laki-laki',
    poli: '',
    penyakit: '',
    keterangan: '',
    situasi: false,
    status: 'pending',
    latitude: 0,
    longitude: 0,
  });

  const toastInfo = {
    title: "Data tidak boleh kosong!",
    description: "Pastikan semua data terisi, silahkan coba lagi",
    variant: "solid",
    isClosable: true,
  }

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  }

  const handleSubmit = () => {
    // Validasi input jika formnya belum terisi
    if (formData.nama_lengkap === '' || formData.umur === 0 || formData.jenis_kelamin === '' || formData.poli === '' || formData.penyakit === '') {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
    else {
      navigation.navigate('HospitalRecomendation', { formData })
    }
  }

  const jenis_kelamin_options = [
    { label: 'Laki-laki', value: 'laki-laki' },
    { label: 'Perempuan', value: 'perempuan' }
  ];


  const poli_options = [
    { label: "Penyakit Dalam", value: "dalam" },
    { label: "Jantung", value: "jantung" },
    { label: "Kandungan", value: "kandungan" },
    { label: "Anak", value: "anak" },
    { label: "Syaraf", value: "syaraf" }
  ];

  const penyakit_options = {
    dalam: [
      { label: 'Diabetes', value: 'diabetes' },
      { label: 'Hipertensi', value: 'hipertensi' },
    ],
    jantung: [
      { label: 'Jantung Koroner', value: 'jantung koroner' },
      { label: 'Aritmia', value: 'aritmia' },
    ],
    kandungan: [
      { label: 'Kista', value: 'kista' },
      { label: 'Mioma', value: 'mioma' },
    ],
    anak: [
      { label: 'Demam', value: 'demam' },
      { label: 'Batuk', value: 'batuk' },
    ],
    syaraf: [
      { label: 'Stroke', value: 'stroke' },
      { label: 'Parkinson', value: 'parkinson' },
    ],
  };

  useEffect(() => {
    // Contoh event yang akan membuka Bottom Sheet
    const openSheet = () => {
      if (bottomSheetRef.current) {
        bottomSheetRef.current.open();
      }
    };

    // Membuka Bottom Sheet ketika komponen dimount
    openSheet();
  }, []);

  useEffect(() => {
    const getPermission = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Please grant permission');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setFormData((prev) => ({
        ...prev, latitude: currentLocation.coords.latitude, longitude: currentLocation.coords.longitude
      }));
    }
    getPermission();
  }, [])
  console.log(formData,"location")
  return (
    <NativeBaseProvider>
      {/* <View> */}
      {showAlert && (
        <Alert position={'absolute'} zIndex={5} maxWidth="100%" mt={8} alignSelf="center" flexDirection="row" status={'error'} variant={'solid'}>
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" className="text-white font-pmedium" fontWeight="medium" flexShrink={1} color={toastInfo.variant === "solid" ? "lightText" : toastInfo.variant !== "outline" ? "darkText" : null}>
                  {toastInfo.title}
                </Text>
              </HStack>
              {toastInfo.isClosable ? <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
                color: toastInfo.variant === "solid" ? "lightText" : "darkText"
              }} onPress={() => setShowAlert(false)} /> : null}
            </HStack>
            <Text className="text-white font-pregular" px="6" color={toastInfo.variant === "solid" ? "lightText" : toastInfo.variant !== "outline" ? "darkText" : null}>
              {toastInfo.description}
            </Text>
          </VStack>
        </Alert>
      )}
      {/* </View> */}
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView className="h-full">
          <components.MapView />
          {/* <components.BottomSheetComp /> */}
          <BottomSheetComp
            ref={bottomSheetRef}
            snapPoints={value === "pribadi" ? ['5%', '40%', '65%'] : ['5%', '50%', '90%']}
            content={
              <Box w="100%" maxWidth="full">
                {value === "oranglain" && (
                  <>
                    {/* Input Nama Lengkap */}
                    <components.DefaultInput title="Nama Lengkap"
                      value={formData.nama_lengkap}
                      onChange={(value) => handleInputChange('nama_lengkap', value)}
                    />

                    {/* Input Umur */}
                    <components.DefaultInput title="Umur"
                      value={formData.umur}
                      onChange={(value) => handleInputChange('umur', value)}
                    />

                    {/* Input Jenis Kelamin */}
                    <components.SelectInput title="Jenis Kelamin"
                      value={formData.jenis_kelamin}
                      onChange={(value) => handleInputChange('jenis_kelamin', value)}
                      options={jenis_kelamin_options}
                      style="mt-3"
                    />
                  </>
                )
                }

                {/* Input Poli */}
                <components.SelectInput
                  title="Poli"
                  value={formData.poli}
                  onChange={(value) => {
                    handleInputChange('poli', value);
                    handleInputChange('penyakit', '');
                  }}
                  options={poli_options}
                  style="mt-3"
                />

                {/* Input Penyakit yang diobati */}
                <components.SelectInput
                  title="Penyakit yang diobati"
                  value={formData.penyakit}
                  onChange={(value) => handleInputChange('penyakit', value)}
                  options={penyakit_options[formData.poli] || []}
                  style="mt-3" />

                {/* Input Keterangan (optional) */}
                <components.TextareaInput title="Keterangan" style="mt-3" value={formData.keterangan}
                  onChange={(value) => handleInputChange('keterangan', value)} />

                {/* Input situasi */}
                <components.RadioInput title="Situasi" style="mt-3"
                  value={formData.situasi}
                  onChange={
                    (value) => handleInputChange('situasi', value)} />

                {/* Button */}
                <Button className="bg-primary h-[44px] mt-8 rounded-xl" onPress={handleSubmit} block>
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