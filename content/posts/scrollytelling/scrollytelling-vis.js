import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Flex } from '@ds';

const scroll = keyframes`
  0%, 20% {
    transform: translate3d(0, 0, 0);
  }
  80%, 100% {
    transform: translate3d(0, -400%, 0);
  }
`;

const Section = styled(Box)`
  animation: 6s ${scroll} linear alternate infinite;
`;

const trigger = offset => keyframes`
  0%, 10%, ${20 + 15 * offset - 5}% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  ${20 + 15 * offset}% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  ${20 + 15 * offset + 5}%, 100% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
`;

const Heading = styled(Box)`
  animation: 6s ${props => trigger(props.offset)} ease-in-out alternate infinite;
`;

const changeImage = keyframes`
  0, 15% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  20% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  25% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }

  30% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  35% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  40% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }

  45% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  50% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  55% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }

  60% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  65% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  70% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }

  75% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
  80% {
    background-color: var(--varun-ca-colors-brand-main, #4e4bec);
  }
  85% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }

  100% {
    background-color: var(--varun-ca-colors-neutral-1, #555);
  }
`;

const Image = styled(Box)`
  animation: 6s ${changeImage} ease-in-out alternate infinite;
`;

const ContentPlaceholder = ({ offset }) => (
  <Section pb={4} className="content-placeholder">
    <Heading
      height={2}
      width="60%"
      mb={2}
      bg="neutral.1"
      borderRadius={3}
      offset={offset}
    />
    <Box height={1} width="100%" mb={1} bg="neutral.1" borderRadius={3} />
    <Box height={1} width="100%" mb={1} bg="neutral.1" borderRadius={3} />
    <Box height={1} width="100%" mb={1} bg="neutral.1" borderRadius={3} />
    <Box height={1} width="100%" mb={1} bg="neutral.1" borderRadius={3} />
    <Box height={1} width="40%" mb={1} bg="neutral.1" borderRadius={3} />
  </Section>
);

export const ScrollytellingVis = () => (
  <Flex
    as="figure"
    height={300}
    overflow="hidden"
    mb={4}
    borderWidth="1px"
    borderStyle="solid"
    borderColor="brand.bright"
    borderRadius={3}
    mx={0}
    p={3}
  >
    <Image width={4} height={4} bg="neutral.3" borderRadius={3} mr={3} />
    <Box flex="1 1 auto">
      <ContentPlaceholder offset={0} />
      <ContentPlaceholder offset={1} />
      <ContentPlaceholder offset={2} />
      <ContentPlaceholder offset={3} />
      <ContentPlaceholder offset={4} />
    </Box>
  </Flex>
);
