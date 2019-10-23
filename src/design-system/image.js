import styled from 'styled-components';
import { compose, space, layout, flexbox } from 'styled-system';
import Img from 'gatsby-image';
import { Box } from './primitives';

export const Image = styled(Box)`
  max-width: 100%;
`;

Image.defaultProps = {
  display: 'block',
  as: 'img',
  mx: 'auto',
  mb: 4,
};

export const BackgroundImage = styled.div(
  {
    position: 'relative',
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

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * MDX pages handle this automatically. This component is meant to be used for
 * JS pages where you manually query images
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 */
export const GatsbyImage = styled(Image)({});
GatsbyImage.defaultProps = {
  as: Img,
  mx: 'auto',
  mb: 4,
};
