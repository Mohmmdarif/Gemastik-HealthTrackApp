// import { View, Text, SafeAreaView } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { Alert, Box, Button, NativeBaseProvider } from 'native-base'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'

// import supabase from '../../supabase'
// import { components } from '../../constants'
// import BottomSheetComp from '../../components/bottom_sheet/bottomSheet'


// const Urgent = () => {
//   const bottomSheetRef = useRef(null);
//   const [formData, setFormData] = useState({
//     poli: '',
//     penyakit: '',
//     keterangan: '',
//     situasi: '',
//   });

//   // console.log(formData.poli);

//   const handleInputChange = (name, value) => {
//     setFormData((prev) => ({
//       ...prev, [name]: value
//     }));
//   }


//   const handleSubmit = () => {
//     fetchData();

//     // mengkosongkan form setelah submit
//     setFormData({
//       poli: '',
//       penyakit: '',
//       keterangan: '',
//       situasi: '',

//     })

//     // console.log(formData);
//   }

//   // const fetchData = async () => {
//   //   try {
//   //     const response = await api.get('/rest/v1/trackingforself');
//   //     console.log(response.data);
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // };

//   const fetchData = async () => {
//     // try {
//     //   const { data, error } = await supabase
//     //     .from('trackingforself')
//     //     .select('*');

//     //   if (error) {
//     //     throw error;
//     //   }

//     //   setData(data);
//     //   console.log(data);
//     // } catch (error) {
//     //   console.error(error);
//     // }

//     try {
//       const { data, error } = await supabase
//         .from('trackingforself') // Replace 'your_table_name' with the actual table name
//         .insert([formData]);

//       if (error) {
//         throw error;
//       }

//       <Alert w="100%" status="success" />
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };


//   const poli_options = [
//     { label: "Penyakit Dalam", value: "dalam" },
//     { label: "Jantung", value: "jantung" },
//     { label: "Kandungan", value: "kandungan" },
//     { label: "Anak", value: "anak" },
//     { label: "Syaraf", value: "syaraf" }
//   ];

//   const penyakit_options = {
//     dalam: [
//       { label: 'Diabetes', value: 'diabetes' },
//       { label: 'Hipertensi', value: 'hipertensi' },
//     ],
//     jantung: [
//       { label: 'Jantung Koroner', value: 'jantung koroner' },
//       { label: 'Aritmia', value: 'aritmia' },
//     ],
//     kandungan: [
//       { label: 'Kista', value: 'kista' },
//       { label: 'Mioma', value: 'mioma' },
//     ],
//     anak: [
//       { label: 'Demam', value: 'demam' },
//       { label: 'Batuk', value: 'batuk' },
//     ],
//     syaraf: [
//       { label: 'Stroke', value: 'stroke' },
//       { label: 'Parkinson', value: 'parkinson' },
//     ],
//   };

//   // const selected_penyakit_options = penyakit_options[formData.poli] || [];

//   // console.log(selected_penyakit_options);

//   useEffect(() => {
//     // Contoh event yang akan membuka Bottom Sheet
//     const openSheet = () => {
//       if (bottomSheetRef.current) {
//         bottomSheetRef.current.open();
//       }
//     };

//     // Membuka Bottom Sheet ketika komponen dimount
//     openSheet();
//   }, []);

//   return (
//     <NativeBaseProvider>
//       <View style={{ flex: 1 }}>
//         <GestureHandlerRootView className="h-full">
//           <components.MapView />
//           {/* <components.BottomSheetComp /> */}
//           <BottomSheetComp
//             ref={bottomSheetRef}
//             snapPoints={['5%', '40%', '60%']}
//             content={
//               <Box w="100%" maxWidth="full">

//                 {/* Input Poli */}
//                 <components.SelectInput
//                   title="Poli"
//                   value={formData.poli}
//                   onChange={(value) => {
//                     handleInputChange('poli', value);
//                     handleInputChange('penyakit', '');
//                   }}
//                   options={poli_options}
//                 />

//                 {/* Input Penyakit yang diobati */}
//                 <components.SelectInput
//                   title="Penyakit yang diobati"
//                   value={formData.penyakit}
//                   onChange={(value) => handleInputChange('penyakit', value)}
//                   options={penyakit_options[formData.poli] || []}
//                   style="mt-3" />

//                 {/* Input Keterangan (optional) */}
//                 <components.TextareaInput title="Keterangan" style="mt-3" value={formData.keterangan}
//                   onChange={(value) => handleInputChange('keterangan', value)} />

//                 {/* Input situasi */}
//                 <components.RadioInput title="Situasi" style="mt-3"
//                   value={formData.situasi}
//                   onChange={
//                     (value) => handleInputChange('situasi', value)} />

//                 {/* Button */}
//                 <Button className="bg-primary h-[44px] mt-8 rounded-xl" onPress={handleSubmit} block>
//                   <Text className="text-white font-psemibold text-md">Cari</Text>
//                 </Button>
//               </Box>
//             }
//           />
//         </GestureHandlerRootView>
//       </View>
//     </NativeBaseProvider>
//   )
// }

// export default Urgent


import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Alert, Box, Button, HStack, NativeBaseProvider } from 'native-base'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import supabase from '../../supabase'
import { components } from '../../constants'
import BottomSheetComp from '../../components/bottom_sheet/bottomSheet'
import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'

const Urgent = () => {
  const router = useRouter();
  const route = useRoute();
  const { value } = route.params;

  const bottomSheetRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    umur: 0,
    jenis_kelamin: '',
    poli: '',
    penyakit: '',
    keterangan: '',
    situasi: false,
  });

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev, [name]: value
    }));
  }


  const handleSubmit = () => {
    fetchData();

    // mengkosongkan form setelah submit
    setFormData({
      nama_lengkap: '',
      umur: 0,
      jenis_kelamin: '',
      poli: '',
      penyakit: '',
      keterangan: '',
      situasi: false,

    })

    // console.log(formData);
  }

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('trackingforpeople') // Replace 'your_table_name' with the actual table name
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Show alert on success
      setShowAlert(true);


      // Hide alert after 3 seconds
      setTimeout(() => setShowAlert(false), 3000);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

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

  return (
    <NativeBaseProvider>
      <View>
        {showAlert && (
          <Alert w="100%" mt={10} status="success">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                Mencari rumah sakit terdekat...
              </Text>
            </HStack>
          </Alert>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView className="h-full">
          <components.MapView />
          {/* <components.BottomSheetComp /> */}
          <BottomSheetComp
            ref={bottomSheetRef}
            snapPoints={value === "pribadi" ? ['5%', '40%', '60%'] : ['5%', '50%', '90%']}
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