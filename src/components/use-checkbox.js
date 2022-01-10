import React, { useState } from 'react';
import { Box, Text } from '@ds';
import styled from 'styled-components';

const Label = styled(Text)`
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export function useCheckbox(name, defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  return [
    value,
    <Label as="label" htmlFor={name} fontSize={2} mb={[3, 0]}>
      {name}
      <Box
        as="input"
        ml={3}
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
    </Label>,
    setValue,
  ];
}
