import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, Flex } from '@ds';
import { Field } from './field';
import { Label } from './label';
import { Input } from './input';
import { Hint } from './hint';
import { Error } from './error';

const ratio = 164 / 405;
const width = '40%';
const ease = 'cubic-bezier(0.77, 0, 0.175, 1)';
const duration = '3000ms';

const partsContainerAnim = transform => keyframes`
  0%, 12.5% {
    transform: ${transform} scaleY(${ratio});
  }

  25%, 50% {
    transform: ${transform} scaleY(1);
  }

  62.5%, 75% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scaleY(1);
  }

  76%, 100% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scaleY(1);
  }
`;

const partsSvgAnim = keyframes`
  0%, 12.5% {
    filter: grayscale(100%);
    transform: translateY(74%) scaleY(${1 / ratio});
  }

  25%, 100% {
    filter: grayscale(0%);
    transform: translateY(0) scaleY(1);
  }
`;

const compositionAnim = keyframes`
  0%, 50% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.75);
  }

  62.5%, 90% {
    opacity: 1;
    transform: translate3d(-50%, -50%, 0) scale(1);
  }

  100% {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(1);
  }
`;

const Parts = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: ${width};
  background: white;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
  animation: ${props => partsContainerAnim(props.transform)} ${duration} ${ease}
    infinite;

  > svg {
    width: 100%;
    filter: grayscale(100%);
    transform: translateY(74%) scaleY(${1 / ratio});
    animation: ${partsSvgAnim} ${duration} ${ease} infinite;
  }
`;

const Composition = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: ${width};
  background: white;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
  transform: translate3d(-50%, -50%, 0);
  opacity: 0;
  animation: ${compositionAnim} ${duration} cubic-bezier(0.68, -0.6, 0.32, 1.6)
    infinite;

  > svg {
    width: 100%;
  }
`;

export default () => (
  <Box as="figure" mb={4} mt={0} mx={0}>
    <Flex
      position="relative"
      flexWrap="wrap"
      alignItems="space-evenly"
      justifyContent="space-evenly"
      alignContent="space-evenly"
      height={['70vh', '90vh']}
      overflow="hidden"
      mb={0}
    >
      <Parts transform={'translate3d(-110%, -105%, 0)'}>
        <Label />
      </Parts>
      <Parts transform={'translate3d(10%, -105%, 0)'}>
        <Input />
      </Parts>
      <Parts transform={'translate3d(-110%, 5%, 0)'}>
        <Hint />
      </Parts>
      <Parts transform={'translate3d(10%, 5%, 0)'}>
        <Error />
      </Parts>
      <Composition
        position="absolute"
        top="50%"
        left="50%"
        transform={'translate3d(-50%, -50%, 0)'}
      >
        <Field />
      </Composition>
    </Flex>
  </Box>
);
