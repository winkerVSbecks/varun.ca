import React from 'react';
import loadable from '@loadable/component';

export const NoiseVsRandom = loadable(
  () => import('./visualizations/noise-vs-random'),
  {
    fallback: <div>Loading...</div>,
  }
);
export const NoiseWave = loadable(() => import('./visualizations/noise-wave'), {
  fallback: <div>Loading...</div>,
});
export const Noise1D = loadable(() => import('./visualizations/noise-1d'), {
  fallback: <div>Loading...</div>,
});
export const Noise2D = loadable(() => import('./visualizations/noise-2d'), {
  fallback: <div>Loading...</div>,
});
export const Noise3D = loadable(() => import('./visualizations/noise-3d'), {
  fallback: <div>Loading...</div>,
});
export const Noise4D = loadable(() => import('./visualizations/noise-4d'), {
  fallback: <div>Loading...</div>,
});
export const Noise4DFancy = loadable(
  () => import('./visualizations/noise-4d-fancy'),
  {
    fallback: <div>Loading...</div>,
  }
);
