import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Text } from './typography';

const StyledLink = styled(Text)`
  opacity: 1;
  transition: opacity ${props => props.theme.animations.easeIn};

  :hover,
  :focus {
    opacity: 0.5;
  }
  :active {
    opacity: 0.8;
  }
`;
StyledLink.defaultProps = {
  as: 'a',
  color: 'brand.main',
  fontSize: 2,
  lineHeight: 'copy',
};

export const Link = ({ to = '', ...props }) =>
  to.startsWith('http') ? (
    <StyledLink
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ) : (
    <StyledLink as={GatsbyLink} to={to} {...props} />
  );

export const SimpleLink = styled(Link)`
  text-decoration: none;
`;
SimpleLink.defaultProps = {
  color: 'neutral.0',
};
