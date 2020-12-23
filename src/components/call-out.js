import React from 'react';
import { Text } from '@ds';

export const CallOut = props => (
  <Text
    bg="neutral.6"
    p={3}
    borderRadius={2}
    mb={4}
    fontSize={2}
    color="neutral.1"
    {...props}
  />
);
