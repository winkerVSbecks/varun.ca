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
  shadow,
  background,
  buttonStyle,
  grid,
} from 'styled-system';

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
    border
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

// export const Flex = styled(Box)({
//   display: 'flex',
// });

// export const Text = styled(Box)(typography);

// Text.defaultProps = {
//   as: 'p',
//   mb: 0,
//   mt: 0,
//   fontFamily: 'inter',
//   lineHeight: 'copy',
//   color: 'gray',
// };

// export const Heading = styled(Text)();

// Heading.defaultProps = {
//   as: 'h2',
//   mb: 0,
//   mt: 0,
//   fontSize: 4,
//   fontWeight: 'bold',
//   fontFamily: 'inter',
//   lineHeight: 'title',
//   color: 'black',
// };

// export const Label = styled(Text)({
//   display: 'block',
// });

// Label.defaultProps = {
//   as: 'label',
//   mb: 2,
//   mt: 0,
//   lineHeight: 'solid',
//   color: 'currentColor',
//   fontWeight: 5,
//   fontSize: 1,
// };

// export const Image = styled(Box)(
//   {
//     maxWidth: '100%',
//   },
//   border
// );

// Image.defaultProps = {
//   as: 'img',
//   m: 0,
//   height: 'auto',
// };

// export const BackgroundImage = styled.div(
//   {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   },
//   props => ({
//     backgroundColor: props.theme.colors.gray,
//     backgroundImage: props.image ? `url(${props.image})` : null,
//   }),
//   layout,
//   flexbox
// );

// export const AspectRatioImage = styled.div(
//   {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     height: 0,
//   },
//   props => ({
//     backgroundColor: props.theme.colors.gray,
//     backgroundImage: props.image ? `url(${props.image})` : null,
//     paddingBottom: `${(1 / props.aspectRatio) * 100}%`,
//   }),
//   space,
//   layout,
//   flexbox
// );
// AspectRatioImage.defaultProps = {
//   aspectRatio: 1,
// };

// export const Card = styled(Box)(
//   { display: 'flex', overflow: 'hidden' },
//   shadow,
//   background,
//   grid
// );

// Card.defaultProps = {
//   borderRadius: 1,
// };

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

// export const Link = styled(Text)(props => ({
//   textDecoration: 'none',

//   ':hover, :focus': {
//     color: props.theme.colors.primary,
//   },
// }));

// Link.defaultProps = {
//   as: 'a',
//   color: 'white',
// };

// export const Container = styled(Flex)({ overflow: 'hidden' });

// Container.defaultProps = {
//   alignItems: 'center',
//   mx: 'auto',
//   height: '100vh',
//   maxWidth: 1184,
//   position: 'relative',
// };

// export const Input = styled.input(
//   {
//     appearance: 'none',
//     display: 'block',
//     width: '100%',
//     fontFamily: 'inherit',
//     color: 'inherit',
//     backgroundColor: 'transparent',
//     borderWidth: 0,
//     borderStyle: 'solid',
//     '::-ms-clear': {
//       display: 'none',
//     },
//   },
//   border,
//   space,
//   props => ({
//     '::placeholder': {
//       color: props.theme.gray,
//     },
//   })
// );

// Input.defaultProps = {
//   fontSize: 1,
//   fontWeight: 400,
//   pt: 3,
//   pb: 3,
//   pl: 2,
//   pr: 2,
//   borderRadius: 0,
//   mt: 0,
//   mb: 0,
//   ml: 0,
//   mr: 0,
// };

// export const Hidden = styled.span`
//   border: 0 !important;
//   clip: rect(0 0 0 0) !important;
//   height: 0.0625rem !important;
//   margin: -0.0625rem !important;
//   overflow: hidden !important;
//   padding: 0 !important;
//   position: absolute !important;
//   width: 0.0625rem !important;
// `;
