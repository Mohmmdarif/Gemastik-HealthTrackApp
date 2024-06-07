import { View, Text } from 'react-native'
import React from 'react'
import { FormControl, Radio } from 'native-base';

const radioInput = ({ title, style }) => {
  const [value, setValue] = React.useState("darurat");

  return (
    <View className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <Radio.Group
        name="situasi"
        accessibilityLabel="favorite number"
        value={value}
        flexDirection={"row"}
        onChange={nextValue => {
          setValue(nextValue);
        }}
        colorScheme={"purple"}
      >
        <Radio value="darurat" my={1}>
          Darurat
        </Radio>
        <Radio value="non darurat" my={1} marginLeft={10}>
          Non Darurat
        </Radio>
      </Radio.Group>
    </View>
  )
}

export default radioInput