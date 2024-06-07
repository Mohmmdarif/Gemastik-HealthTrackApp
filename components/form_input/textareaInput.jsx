import React, { useState } from 'react';
import { Box, FormControl, NativeBaseProvider, TextArea } from 'native-base';

const textareaInput = ({ title, style }) => {
  const [text, setText] = useState("");

  return (
    <Box w="full" mx="auto" className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
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