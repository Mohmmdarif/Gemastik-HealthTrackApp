import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { VStack, Box, Divider, NativeBaseProvider, ScrollView } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import supabase from '../../supabase';


const History = () => {
  const [histories, setHistories] = useState([]);

  useEffect(() => {
    getHistories();
  }, []);

  const getHistories = async () => {
    try {
      const { data: riwayat, error } = await supabase
        .from('riwayat')
        .select('*')

      if (error) {
        throw error
      }

      setHistories(riwayat)
    } catch (error) {
      console.log(error)
    }
  }

  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <NativeBaseProvider>
      <SafeAreaView className="bg-white h-full">
        <ScrollView>
          <View className="p-4 w-full min-h-[100vh]">
            {
              histories.map((history, index) => (
                <Box className="shadow-sm shadow-black rounded-xl mb-3" key={index}>
                  <VStack space="4" className="p-4 bg-white rounded-xl">
                    <Box px={4} pt={1}>
                      <Text className="text-xs font-pmedium text-[#747474] capitalize">{formatTimeStamp(history.timestamp)}</Text>
                    </Box>
                    <View className="flex justify-center items-center px-4">
                      <Divider className="w-full" />
                    </View>
                    <Box px={4}>
                      <Text className="text-center font-psemibold text-sm capitalize">{history.rumah_sakit}</Text>
                    </Box>
                    <View className="flex justify-center items-center px-4">
                      <Divider className="w-full" />
                    </View>
                    <Box px={4}>
                      <View style={styles.row}>
                        <Text style={styles.label}>Nama Pasien</Text>
                        <Text style={styles.separator}>:</Text>
                        <Text style={styles.value}>{history.nama_pasien}</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.label}>Poli</Text>
                        <Text style={styles.separator}>:</Text>
                        <Text style={styles.value}>{history.poli === "dalam" ? "Penyakit dalam" : history.poli}</Text>
                      </View>
                      <View style={styles.row}>
                        <Text style={styles.label}>Penyakit</Text>
                        <Text style={styles.separator}>:</Text>
                        <Text style={styles.value}>{history.penyakit}</Text>
                      </View>
                    </Box>
                    <Box px={4} className="flex-row items-center gap-2 justify-end">
                      {
                        history.status === "pending" ? (
                          <>
                            <Text className="text-right font-pmedium text-sm text-[#FF4D4F]">Tertunda</Text>
                            <View className="w-4 h-4 rounded-full bg-[#FF4D4F]"></View>
                          </>
                        ) : (
                          <>
                            <Text className="text-right font-pmedium text-sm text-[#29CD61]">Diterima</Text>
                            <View className="w-4 h-4 rounded-full bg-[#29CD61]"></View>
                          </>
                        )
                      }
                    </Box>
                  </VStack>
                </Box>
              ))
            }
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  label: {
    flex: 1,
    textAlign: 'left',
    marginRight: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 'medium',
    color: '#747474',
  },
  separator: {
    marginRight: 10,
  },
  value: {
    flex: 2,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    fontWeight: 'medium',
    textTransform: 'capitalize',
  },
});

export default History