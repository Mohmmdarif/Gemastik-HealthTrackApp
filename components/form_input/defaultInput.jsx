import { View, Text } from 'react-native'
import React from 'react'
import { FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'

const defaultInput = ({ style, title, value, onChange, isRequired }) => {
  return (
    <FormControl className={`${style}`} isRequired={isRequired}>
      <Stack>
        <FormControl.Label>{title}</FormControl.Label>
        <Input type="text" placeholder={`${title}`} borderRadius={12} fontSize={14} _focus={{
          borderColor: "purple.500",
          backgroundColor: "purple.50",
        }}
          value={value}
          onChangeText={onChange}
        />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default defaultInput