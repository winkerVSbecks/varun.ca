import React from 'react';
import loadable from '@loadable/component';

export const MVP = loadable(() => import('./mvp'), {
  fallback: <div>Loading...</div>,
});

export const Shadows = loadable(() => import('./shadow'), {
  fallback: <div>Loading...</div>,
});

export const DepthOfField = loadable(() => import('./dof'), {
  fallback: <div>Loading...</div>,
});
