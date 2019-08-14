import React from 'react';
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
import { Text } from './typography';

export const Blockquote = styled.blockquote`
${compose(
  space,
  color,
  layout,
  flexbox,
  border
)}
  border-left: 0.25rem solid ${props => props.theme.colors.brand.main};
`;
Blockquote.defaultProps = {
  as: 'blockquote',
  ml: 0,
  pl: 2,
  mb: 3,
};

export const Cite = styled(Text)``;
Cite.defaultProps = {
  as: 'cite',
  fontStyle: 'normal',
};
