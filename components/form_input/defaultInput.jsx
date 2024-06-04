import { View, Text } from 'react-native'
import React from 'react'
import { FormControl, Input, Stack, WarningOutlineIcon } from 'native-base'

const defaultInput = ({ style, title }) => {
  return (
    <FormControl className={`${style}`} isRequired>
      <Stack>
        <FormControl.Label>{title}</FormControl.Label>
        <Input type="text" placeholder={`${title}`} borderRadius={12} fontSize={14} />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Atleast 6 characters are required.
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  )
}

export default defaultInput