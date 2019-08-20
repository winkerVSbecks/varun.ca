import React from 'react';
import { Box } from './primitives';
import { Text } from './typography';
import { SimpleLink } from './links';

export const GlobalHeader = () => (
  <Box as="header" mx="auto" my={6} display={['block', 'flex']}>
    <SimpleLink
      to="/writing"
      style={{ textTransform: 'uppercase' }}
      mr={2}
      color="neutral.1"
      letterSpacing="tracked"
      fontSize={1}
      fontWeight={7}
      lineHeight="solid"
    >
      Varun Vachhar
    </SimpleLink>{' '}
    <Text color="neutral.3" fontSize={1} lineHeight="solid" mt={[1, 0]} mb={0}>
      finder of new ways to confuse myself
    </Text>
  </Box>
);
