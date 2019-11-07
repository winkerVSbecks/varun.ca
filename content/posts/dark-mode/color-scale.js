import React from 'react';
import { Text, Box, Flex } from '@ds';
import { colorModes } from '@theme/colors';

const ColorStep = ({ bg, color, name, ...props }) => (
  <Text
    mb={0}
    px={3}
    py={2}
    fontFamily="code"
    fontSize={1}
    bg={bg}
    color={color}
    {...props}
  />
);

export default () => (
  <Flex mb={4} alignItems="stretch">
    {/* <Flex flexDirection="column">
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg="brand.main"
        color="neutral.7"
      >
        brand.main
      </ColorStep>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg="brand.bright"
        color="neutral.2"
      >
        brand.bright
      </ColorStep>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg="brand.faded"
        color="neutral.0"
      >
        brand.faded
      </ColorStep>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg="brand.selection"
        color="neutral.0"
      >
        brand.selection
      </ColorStep>
    </Flex> */}

    <Box flex="1 1 auto">
      <ColorStep bg={colorModes.dark.neutral[0]} color="neutral.7">
        neutral.0
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[1]} color="neutral.7">
        neutral.1
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[2]} color="neutral.7">
        neutral.2
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[3]} color="neutral.7">
        neutral.3
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[4]} color="neutral.0">
        neutral.4
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[5]} color="neutral.0">
        neutral.5
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[6]} color="neutral.0">
        neutral.6
      </ColorStep>
      <ColorStep bg={colorModes.dark.neutral[7]} color="neutral.0">
        neutral.7
      </ColorStep>
    </Box>
  </Flex>
);
