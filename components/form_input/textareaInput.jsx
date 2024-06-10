import React, { useState } from 'react';
import { Box, FormControl, NativeBaseProvider, TextArea } from 'native-base';

const textareaInput = ({ title, value, onChange, style }) => {

  return (
    <Box w="full" mx="auto" className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <TextArea
        value={value}
        onChangeText={onChange}
        placeholder="Keterangan (opsional)"
        height={250}
        borderRadius={12}
        borderWidth={1}
        fontSize={14}
        _focus={{
          borderColor: "purple.500",
          backgroundColor: "purple.50",
        }}
      />
    </Box>
  )
}

export default textareaInput