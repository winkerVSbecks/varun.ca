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

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  measure
);

export const defaultTypeProps = {
  mb: 4,
  mt: 0,
  fontFamily: 'systemSans',
  color: 'neutral.0',
};

export const Text = styled.p(typographyFunctions);
Text.defaultProps = {
  ...defaultTypeProps,
  fontSize: [2, 3],
  lineHeight: 'copy',
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
