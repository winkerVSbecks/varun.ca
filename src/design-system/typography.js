import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
} from 'styled-system';
import { measure } from './system-functions';

const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  measure
);

export const defaultTypeProps = {
  mb: 3,
  mt: 0,
  fontFamily: 'systemSans',
  color: 'neutral.0',
};

export const Text = styled.p(typographyFunctions);
Text.defaultProps = {
  ...defaultTypeProps,
  fontSize: 2,
  lineHeight: 'copy',
};

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
  ...defaultTypeProps,
  as: 'a',
  color: 'brand.main',
  mb: 0,
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

const HeadingBase = styled(Text)`
  display: flex;
  align-items: center;

  a {
    margin-left: -24px;
    margin-right: 8px;
    transition: opacity 0.15s ease-in;
    opacity: 0;
  }

  a > svg {
    display: inline-block;
    fill: ${props => props.theme.colors.secondary};
  }

  a:focus {
    opacity: 1;
  }

  :hover {
    a {
      opacity: 1;
    }
  }
`;

export const H1 = styled(HeadingBase)``;
H1.defaultProps = {
  ...defaultTypeProps,
  as: 'h1',
  fontSize: [4, 5, 6],
  fontWeight: 7,
  lineHeight: 'title',
};

export const H2 = styled(HeadingBase)``;
H2.defaultProps = {
  ...defaultTypeProps,
  as: 'h2',
  fontSize: [4, 5],
  fontWeight: 7,
  lineHeight: 'title',
};

export const H3 = styled(HeadingBase)``;
H3.defaultProps = {
  ...defaultTypeProps,
  as: 'h3',
  fontSize: [3, 4],
  fontWeight: 7,
  lineHeight: 'title',
};

export const H4 = styled(HeadingBase)``;
H4.defaultProps = {
  ...defaultTypeProps,
  as: 'h4',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
};

export const H5 = styled(HeadingBase)``;
H5.defaultProps = {
  ...defaultTypeProps,
  as: 'h5',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
};

export const H6 = styled(HeadingBase)``;
H6.defaultProps = {
  ...defaultTypeProps,
  as: 'h6',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
};
