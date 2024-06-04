import { View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'native-base'
import { icons } from '../../constants';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Lakukan pencarian berdasarkan teks yang dimasukkan
    console.log('Mencari:', searchTerm);
  };
  return (
    <View className="flex-row flex-1 items-center bg-white p-3 rounded-[12px] shadow-md shadow-gray-400">
      <Image
        source={icons.searchIcon}
        alt="search icon"
        className="w-5 h-5 mr-3" />
      <TextInput
        className="text-sm font-pregular flex-1 p-0 "
        placeholder="Cari Layanan..."
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
      />
    </View>
  )
}


export default Search