import React from 'react';
import loadable from '@loadable/component';

export const Hello3D = loadable(() => import('./visualizations/hello-3d'), {
  fallback: <div>Loading...</div>,
});

export const TetrisBlock = loadable(
  () => import('./visualizations/tetris-block'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const NoiseMaterial = loadable(
  () => import('./visualizations/noise-material'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const BasicAnimation = loadable(
  () => import('./visualizations/basic-animation'),
  {
    fallback: <div>Loading...</div>,
  }
);
