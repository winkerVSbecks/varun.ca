import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { typographyFunctions } from './typography';

const StyledLink = styled.a`
  ${typographyFunctions}
  opacity: 1;
  transition: color ${props => props.theme.animations.easeIn};
  text-decoration: none;

  :hover,
  :focus,
  :active {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.brand.faded};
  }
`;
StyledLink.defaultProps = {
  as: 'a',
  color: 'brand.main',
  fontFamily: 'systemSans',
};

export const Link = ({ to = '', href, as = StyledLink, ...props }) => {
  const destination = href ? href : to;
  const Tag = as;

  if (destination.startsWith('#')) {
    return <Tag href={destination} {...props} />;
  } else if (
    destination.startsWith('http') ||
    destination.startsWith('mailto')
  ) {
    return (
      <Tag
        href={destination}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  }

  return <Tag as={GatsbyLink} to={destination} {...props} />;
};

export const SimpleLink = styled(Link)`
  text-decoration: none;

  :hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.brand.main};
    text-decoration: none;
  }
`;
SimpleLink.defaultProps = {
  color: 'neutral.0',
};
