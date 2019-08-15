import styled from 'styled-components';
import { compose, space, color, layout, flexbox, border } from 'styled-system';
import { Text } from './typography';

export const Blockquote = styled.blockquote`
${compose(
  space,
  color,
  layout,
  flexbox,
  border
)}
  border-left: 4px solid ${props => props.theme.colors.brand.main};
  margin-left: ${props => -props.theme.space[3] - 4}px
`;
Blockquote.defaultProps = {
  as: 'blockquote',
  pl: 3,
  mb: 4,
};

export const Cite = styled(Text)``;
Cite.defaultProps = {
  as: 'cite',
  fontStyle: 'normal',
};
