import styled from 'styled-components';
import { compose, typography, buttonStyle } from 'styled-system';
import { SimpleLink } from './links';
import { Box } from './primitives';

export const Button = styled(Box).attrs(props => ({
  as: 'button',
  fontFamily: 'systemSans',
}))(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  compose(
    typography,
    buttonStyle
  )
);

Button.defaultProps = {
  border: 0,
};

export const TransparentButton = styled(Button)`
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

TransparentButton.defaultProps = {
  p: 0,
};

export const ButtonLink = styled(SimpleLink)({});

ButtonLink.defaultProps = {
  display: 'inline-block',
  borderBottom: 'bright',
  fontSize: 1,
  bg: 'brand.faded',
  color: 'brand.main',
  textAlign: 'center',
  px: 3,
  py: 2,
  lineHeight: 'copy',
  mr: 3,
  width: 4,
};
