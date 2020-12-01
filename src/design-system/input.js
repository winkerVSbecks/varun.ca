import styled from 'styled-components';
import { compose, typography } from 'styled-system';
import { Box } from './primitives';

export const Input = styled(Box).attrs({
  as: 'input',
  fontFamily: 'systemSans',
})`
  ${compose(typography)}
  appearance: none;
  display: inline-block;
  height: 40px;

  &:focus {
    outline: 0;
    border-color: ${props => props.theme.colors.neutral[4]};
  }
`;

Input.defaultProps = {
  borderStyle: 'solid',
  borderWidth: '1px',
  borderColor: 'neutral.5',
  display: 'inline-block',
  bg: 'neutral.7',
  color: 'neutral.0',
  fontSize: 2,
  fontWeight: 5,
  px: 3,
  lineHeight: 'copy',
  mr: 3,
  width: 4,
  paddingTop: 2,
  paddingBottom: 2,
};
