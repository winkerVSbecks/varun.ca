import React, { useState } from 'react';
import { Box, Text } from '@ds';
import styled from 'styled-components';

const Label = styled(Text)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export function useSelect(name, options, defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  return [
    value,
    <Label as="label" htmlFor={name} fontSize={2} mb={[3, 0]}>
      {name}
      <Box
        as="select"
        ml={3}
        borderRadius={2}
        p={1}
        width="100%"
        name={name}
        id="pet-select"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {options.map((option) => (
          <option>{option}</option>
        ))}
      </Box>
    </Label>,
    setValue,
  ];
}
