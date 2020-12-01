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
  compose(typography, buttonStyle)
);

Button.defaultProps = {
  border: 0,
};

export const PrimaryButton = styled(Button)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  height: 40px;

  opacity: 1;
  transition: opacity 0.15s ease-in;

  &:hover,
  &:focus {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
`;

PrimaryButton.defaultProps = {
  display: 'inline-block',
  fontSize: 0,
  bg: 'neutral.1',
  color: 'neutral.7',
  fontWeight: 5,
  textAlign: 'center',
  px: 3,
  lineHeight: 'title',
  width: 4,
  paddingTop: 2,
  paddingBottom: 2,
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

export const ButtonLink = styled(SimpleLink)(props => ({
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  paddingTop: props.theme.space[3] * 0.75,
  paddingBottom: props.theme.space[3] * 0.75,
}));

ButtonLink.defaultProps = {
  display: 'inline-block',
  fontSize: 0,
  bg: 'neutral.5',
  color: 'brand.main',
  fontWeight: 5,
  textAlign: 'center',
  px: 3,
  lineHeight: 'title',
  mr: 3,
  width: 4,
};
