import React from 'react';
import loadable from '@loadable/component';

export const MVP = loadable(() => import('./mvp'), {
  fallback: <div>Loading...</div>,
});
