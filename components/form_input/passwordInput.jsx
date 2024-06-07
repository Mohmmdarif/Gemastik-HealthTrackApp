import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FormControl, Icon, Input, Stack, WarningOutlineIcon } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";

const passwordInput = ({ title, style }) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl className={`${style}`} isRequired>
      <Stack>
        <FormControl.Label>{title}</FormControl.Label>
        <Input w={{
          base: "full"
        }} fontSize={14} borderRadius={12} type={show ? "text" : "password"} _focus={{
          borderColor: "purple.500",
          backgroundColor: "purple.50",
        }} InputRightElement={<Pressable onPress={() => setShow(!show)}>
          <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Pressable>} placeholder={`${title}`} />
      </Stack>
    </FormControl>
  )
}

export default passwordInput