import { View, Text } from 'react-native'
import React from 'react'
import { FormControl, Radio } from 'native-base';

const radioInput = ({ title, value, onChange, style }) => {

  return (
    <View className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <Radio.Group
        name="situasi"
        accessibilityLabel="favorite number"
        value={value ? "true" : "false"}
        flexDirection={"row"}
        onChange={(newValue) => onChange(newValue === "true")}
        colorScheme={"purple"}
      >
        <Radio value="true" my={1}>
          Darurat
        </Radio>
        <Radio value="false" my={1} marginLeft={10}>
          Non Darurat
        </Radio>
      </Radio.Group>
    </View>
  )
}

export default radioInput