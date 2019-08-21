import React from 'react';
import { GatsbyImage, AspectRatioImage } from './image';

export const CardLink = ({ link, title, image }) => (
  <a class="dib w5 ba b--secondary pointer pa1 hide-child relative" href={link}>
    <div class="aspect-ratio aspect-ratio--4x3">
      <AspectRatioImage
        class="aspect-ratio aspect-ratio--object cover bg-center"
        image={image}
      >
        <div class="dark-gray b w-100 h-100 child bg-white-90 flex items-center justify-center">
          {title}
        </div>
      </AspectRatioImage>
    </div>
  </a>
);
