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
    truncate
    {...props}
  />
);

export default () => (
  <Flex mb={4} alignItems="stretch" flexWrap={['wrap', 'nowrap']}>
    <Box flex="1 1 auto" mr={[0, 3]} mb={[3, 0]}>
      <ColorStep
        bg={colorModes.dark.neutral[0]}
        color={colorModes.dark.neutral[7]}
      >
        neutral.0 - {colorModes.dark.neutral[0]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[1]}
        color={colorModes.dark.neutral[7]}
      >
        neutral.1 - {colorModes.dark.neutral[1]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[2]}
        color={colorModes.dark.neutral[7]}
      >
        neutral.2 - {colorModes.dark.neutral[2]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[3]}
        color={colorModes.dark.neutral[7]}
      >
        neutral.3 - {colorModes.dark.neutral[3]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[4]}
        color={colorModes.dark.neutral[0]}
      >
        neutral.4 - {colorModes.dark.neutral[4]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[5]}
        color={colorModes.dark.neutral[0]}
      >
        neutral.5 - {colorModes.dark.neutral[5]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[6]}
        color={colorModes.dark.neutral[0]}
      >
        neutral.6 - {colorModes.dark.neutral[6]}
      </ColorStep>
      <ColorStep
        bg={colorModes.dark.neutral[7]}
        color={colorModes.dark.neutral[0]}
      >
        neutral.7 - {colorModes.dark.neutral[7]}
      </ColorStep>
    </Box>

    <Flex flex="1 1 auto" flexDirection={['row', 'column']}>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg={colorModes.dark.brand.main}
        color={colorModes.dark.neutral[7]}
      >
        brand.main
      </ColorStep>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg={colorModes.dark.brand.bright}
        color={colorModes.dark.neutral[7]}
      >
        brand.bright
      </ColorStep>
      <ColorStep
        flex="1 1 auto"
        display="flex"
        alignItems="center"
        bg={colorModes.dark.brand.faded}
        color={colorModes.dark.neutral[0]}
      >
        brand.faded
      </ColorStep>
    </Flex>
  </Flex>
);
