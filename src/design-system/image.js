import styled from 'styled-components';
import { compose, space, layout, flexbox } from 'styled-system';
import { Box } from './primitives';

export const Image = styled(Box)({
  maxWidth: '100%',
});

Image.defaultProps = {
  as: 'img',
  m: 0,
  height: 'auto',
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
