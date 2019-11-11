import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
} from 'styled-system';
import { measure, truncate } from './system-functions';

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
  mt: 0,
  fontFamily: 'systemSans',
  color: 'neutral.0',
};

export const Text = styled.p(typographyFunctions, truncate);
Text.defaultProps = {
  ...defaultTypeProps,
  mb: 4,
  fontSize: [2, 3],
  lineHeight: 'copy',
};

export const Description = styled(Text)({});
Description.defaultProps = {
  fontSize: 2,
  color: 'neutral.3',
  mb: 3,
};

const HeadingBase = styled(Text)`
  display: flex;
  align-items: center;

  .heading-anchor {
    margin-left: -24px;
    margin-right: 8px;
    transition: opacity 0.15s ease-in;
    opacity: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
  }

  .heading-anchor > svg {
    display: inline-block;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: ${props => props.theme.colors.neutral[2]};
  }

  .heading-anchor:focus {
    opacity: 1;
  }

  :hover {
    .heading-anchor {
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
  mb: 3,
};

export const H2 = styled(HeadingBase)``;
H2.defaultProps = {
  ...defaultTypeProps,
  as: 'h2',
  fontSize: [4, 5],
  fontWeight: 7,
  lineHeight: 'title',
  mb: 3,
};

export const H3 = styled(HeadingBase)``;
H3.defaultProps = {
  ...defaultTypeProps,
  as: 'h3',
  fontSize: [3, 4],
  fontWeight: 7,
  lineHeight: 'title',
  mb: 3,
};

export const H4 = styled(HeadingBase)``;
H4.defaultProps = {
  ...defaultTypeProps,
  as: 'h4',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
  mb: 3,
};

export const H5 = styled(HeadingBase)``;
H5.defaultProps = {
  ...defaultTypeProps,
  as: 'h5',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
  mb: 3,
};

export const H6 = styled(HeadingBase)``;
H6.defaultProps = {
  ...defaultTypeProps,
  as: 'h6',
  fontSize: 3,
  fontWeight: 7,
  lineHeight: 'title',
  mb: 3,
};
