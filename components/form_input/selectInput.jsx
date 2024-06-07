import { View, Text } from 'react-native'
import React from 'react'
import { Box, CheckIcon, FormControl, Select, WarningOutlineIcon } from 'native-base'

const selectInput = ({ title, style }) => {
  const [service, setService] = React.useState("");

  return (
    <Box w="full" mx="auto" className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <Select
        selectedValue={service}
        minWidth="200"
        accessibilityLabel="Pilih layanan"
        placeholder="Pilih layanan"
        _selectedItem={{
          bg: "#701AF5",
          endIcon: <CheckIcon size="5" color="white" />,
          _text: { color: "white", fontWeight: "500" }
        }}
        rounded={12}
        fontSize={14}

        onValueChange={itemValue => setService(itemValue)}
      >
        <Select.Item label="Penyakit Dalam" value="penyakit dalam" />
        <Select.Item label="Jantung" value="jantung" />
        <Select.Item label="Kandungan" value="kandungan" />
        <Select.Item label="Anak" value="anak" />
        <Select.Item label="Syaraf" value="syaraf" />
      </Select>
    </Box>
  )
}

export default selectInput