import React from 'react';
import styled from 'styled-components';
import { H2, typographyFunctions } from './typography';
import { Flex, SVG, Box } from './primitives';
import { Link, SimpleLink } from './links';

const StackTitleLink = styled(Flex)`
  ${typographyFunctions}
  text-decoration: none;

  ${SVG} {
    opacity: 0;
    transition: opacity ${props => props.theme.animations.easeIn},
      transform ${props => props.theme.animations.easeInOut};
  }

  :hover ${SVG}, :focus ${SVG}, :active ${SVG} {
    opacity: 1;
    transform: translate3d(2rem, 0, 0);
  }
`;
StackTitleLink.defaultProps = {
  as: 'a',
  color: 'neutral.0',
  fontFamily: 'systemSans',
};

export const StackItem = props => (
  <SimpleLink
    display="block"
    fontSize={3}
    py={3}
    borderBottom="neutral0"
    alignItems="center"
    width="100%"
    {...props}
  />
);

export const StackTitle = props => (
  <H2 mb={0}>
    <Link
      as={StackTitleLink}
      fontSize={3}
      py={3}
      borderBottom="neutral0"
      alignItems="center"
      width="100%"
      {...props}
    />
  </H2>
);

export const Stack = props => <Box measure="wide" mx={3} mb={6} {...props} />;
