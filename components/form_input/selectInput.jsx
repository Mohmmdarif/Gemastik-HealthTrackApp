import React from 'react'
import { Box, CheckIcon, FormControl, Select, WarningOutlineIcon } from 'native-base'

const selectInput = ({ title, value, onChange, options, style }) => {
  return (
    <Box w="full" mx="auto" className={style}>
      <FormControl.Label>{title}</FormControl.Label>
      <Select
        selectedValue={value}
        value={value}
        minWidth="200"
        accessibilityLabel={`Pilih ${title}`}
        placeholder={`Pilih ${title}`}
        _selectedItem={{
          bg: "#701AF5",
          endIcon: <CheckIcon size="5" color="white" />,
          _text: { color: "white", fontWeight: "500" }
        }}
        rounded={12}
        fontSize={14}
        onValueChange={onChange}
        required
      >
        {options.map((option, index) => (
          <Select.Item key={index} label={option.label} value={option.value} />
        ))}
      </Select>
    </Box>
  )
}

export default selectInput