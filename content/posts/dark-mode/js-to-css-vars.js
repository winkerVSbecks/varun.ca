import React from 'react';
import { Box, Flex, Text, SrOnly } from '@ds';

export default () => (
  <Flex
    as="figure"
    mt={0}
    mx={0}
    mb={4}
    alignItems="center"
    flexDirection={['column', 'row']}
  >
    <Text
      as="pre"
      overflow="auto"
      fontSize={0}
      fontFamily="code"
      bg="code.background"
      p={2}
      mb={0}
    >
      <code>{`{
  light: {
    brand: {
      main: '#4e4bec',
      bright: '#dedefb',
      faded: '#ececfd',
      selection: '#ececfd',
    },
    neutral: {
      0: '#333',
      1: '#555',
      ...
    },
  }
  dark: { ... },
}`}</code>
    </Text>

    <Text
      as="pre"
      overflow="auto"
      fontSize={2}
      fontFamily="code"
      mb={0}
      mx={3}
      flex="1 1 auto"
      display={['none', 'block']}
    >
      ⭢
    </Text>

    <Text
      as="pre"
      overflow="auto"
      fontSize={2}
      fontFamily="code"
      mb={3}
      mt={3}
      flex="1 1 auto"
      display={['block', 'none']}
    >
      ⭣
    </Text>

    <Box>
      <Text
        as="pre"
        overflow="auto"
        fontSize={0}
        fontFamily="code"
        bg="code.background"
        p={2}
        mb={3}
      >{`{
  light: {
    brand: {
      main: "var(--varun-ca-colors-brand-main, #4e4bec)",
      bright: "var(--varun-ca-colors-brand-bright, #dedefb)",
      faded: "var(--varun-ca-colors-brand-faded, #ececfd)",
      selection: "var(--varun-ca-colors-brand-selection, #ececfd)"
    },
    neutral: {
      0: "var(--varun-ca-colors-neutral-0, #333)",
      1: "var(--varun-ca-colors-neutral-1, #555)",
      ...
    },
  }
  dark: { ... },
}`}</Text>
      <Text
        as="pre"
        fontSize={0}
        fontFamily="code"
        bg="code.background"
        p={2}
        mb={0}
      >{`{
  "&.varun-ca-light": {
    "--varun-ca-colors-brand-main": "#4e4bec",
    "--varun-ca-colors-brand-bright": "#dedefb",
    "--varun-ca-colors-brand-faded": "#ececfd",
    "--varun-ca-colors-brand-selection": "#ececfd",
    "--varun-ca-colors-neutral-0": "#333",
    "--varun-ca-colors-neutral-1": "#555",
    ...
  }
  "&.varun-ca-dark": { ... },
}`}</Text>
    </Box>

    <SrOnly as="figcaption">
      Theme object is modified to use CSS custom properties and a set of global
      CSS is extracted to control the value of those custom properties
    </SrOnly>
  </Flex>
);
