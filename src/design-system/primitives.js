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
  grid,
  position,
} from 'styled-system';
import { measure, truncate } from './system-functions';

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
    measure,
    position
  ),
  truncate
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

export const HorizontalScroll = styled(Flex)`
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  flex-wrap: nowrap;
`;

export const Card = styled(Box)(
  { display: 'flex', overflow: 'hidden' },
  shadow,
  background,
  grid
);

Card.defaultProps = {
  borderRadius: 1,
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
