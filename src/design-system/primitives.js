import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  shadow,
  background,
  buttonStyle,
  grid,
} from 'styled-system';
import { measure } from './system-functions';

export const Box = styled.div(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    measure
  )
);

export const SVG = styled.svg(
  compose(
    space,
    color,
    layout,
    flexbox,
    typography,
    border
  )
);

export const Flex = styled(Box)({
  display: 'flex',
});

export const Card = styled(Box)(
  { display: 'flex', overflow: 'hidden' },
  shadow,
  background,
  grid
);

Card.defaultProps = {
  borderRadius: 1,
};

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

export const Divider = styled(Box)`
  border-bottom-style: solid;
  border-bottom-width: 4px;
`;
Divider.defaultProps = {
  width: 3,
  my: 5,
  borderColor: 'neutral.5',
};

// export const PrimaryButton = styled(Button)({
//   display: 'block',
//   backfaceVisibility: 'hidden',
//   transform: 'translateZ(0)',
//   transition: 'transform .25s ease-out',
//   outline: 0,
//   ':hover,:focus': {
//     transform: 'scale( 1.05 )',
//   },
//   ':active': {
//     transform: 'scale( .90 )',
//   },
// });

// PrimaryButton.defaultProps = {
//   as: 'button',
//   border: 0,
//   backgroundColor: 'secondary',
//   borderRadius: 1,
//   color: 'primary',
//   fontSize: 1,
//   fontWeight: 6,
// };

export const SrOnly = styled.span`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 0.0625rem !important;
  margin: -0.0625rem !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 0.0625rem !important;
`;
