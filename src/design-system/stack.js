import React from 'react';
import styled from 'styled-components';
import { H1, typographyFunctions } from './typography';
import { Flex, SVG, Box } from './primitives';
import { Link, SimpleLink } from './links';
import { Icon } from './icon';

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

const StackItem = props => (
  <SimpleLink
    display="flex"
    fontSize={3}
    py={3}
    borderBottom="faded"
    alignItems="center"
    width="100%"
    {...props}
  />
);

const StackTitle = props => (
  <H1 mb={0}>
    <Link
      as={StackTitleLink}
      fontSize={3}
      py={3}
      borderBottom="faded"
      alignItems="center"
      width="100%"
      {...props}
    />
  </H1>
);

const StackMoreLink = ({ children, ...props }) => (
  <Link
    as={StackTitleLink}
    color="neutral.2"
    fontSize={1}
    mt={2}
    py={3}
    alignItems="center"
    width="100%"
    {...props}
  >
    {children}
    <Icon type="arrow-right" ml={1} />
  </Link>
);

export const Stack = props => (
  <Box as="section" measure="wide" width="34em" ml={3} mb={6} {...props} />
);

Stack.Item = StackItem;
Stack.Title = StackTitle;
Stack.MoreLink = StackMoreLink;
Stack.StackTitleLink = StackTitleLink;
