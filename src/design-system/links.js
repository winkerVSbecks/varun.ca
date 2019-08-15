import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { typographyFunctions } from './typography';

const StyledLink = styled.a`
  ${typographyFunctions}
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
  fontFamily: 'systemSans',
};

export const Link = ({ to = '', ...props }) =>
  to.startsWith('http') || to.startsWith('mailto') ? (
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
