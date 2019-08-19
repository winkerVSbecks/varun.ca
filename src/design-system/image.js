import styled from 'styled-components';
import { compose, space, layout, flexbox } from 'styled-system';
import { Box } from './primitives';

export const Image = styled(Box)`
  max-width: 100%;
  display: block;
`;

Image.defaultProps = {
  as: 'img',
  mx: 'auto',
  mb: 4,
};

export const BackgroundImage = styled.div(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  props => ({
    backgroundColor: props.theme.colors.gray,
    backgroundImage: props.image ? `url(${props.image})` : null,
  }),
  compose(
    layout,
    flexbox
  )
);

export const AspectRatioImage = styled.div(
  {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 0,
  },
  props => ({
    backgroundColor: props.theme.colors.gray,
    backgroundImage: props.image ? `url(${props.image})` : null,
    paddingBottom: `${(1 / props.aspectRatio) * 100}%`,
  }),
  compose(
    space,
    layout,
    flexbox
  )
);
AspectRatioImage.defaultProps = {
  aspectRatio: 1,
};
