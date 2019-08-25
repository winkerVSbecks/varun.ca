import React from 'react';
import styled from 'styled-components';
import { AspectRatioImage } from './image';
import { typographyFunctions, Text } from './typography';
import { Box } from './primitives';
import { Link } from './links';

const BlockLink = styled(Box).attrs({
  as: 'a',
})`
  ${typographyFunctions}
  display: block;
  text-decoration: none;

  ${AspectRatioImage} {
    position: relative;
  }

  ${Text} {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity ${props => props.theme.animations.easeIn};
  }

  :hover,
  :focus,
  :active {
    ${Text} {
      opacity: 1;
    }
  }
`;

export const CardLink = ({ link, title, image, ...props }) => (
  <Link as={BlockLink} width={5} p={1} border="faded" to={link} {...props}>
    <AspectRatioImage aspectRatio={4 / 3} image={image}>
      <Text
        mb={0}
        fontSize={2}
        fontWeight={7}
        w="100%"
        h="100%"
        color="neutral.1"
        bg="transparentNeutral.9"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {title}
      </Text>
    </AspectRatioImage>
  </Link>
);
