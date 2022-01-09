import React from 'react';
import loadable from '@loadable/component';

export const SpaceDust = loadable(() => import('./visualizations/space-dust'), {
  fallback: <div>Loading...</div>,
});

export const Sparks = loadable(() => import('./visualizations/sparks'), {
  fallback: <div>Loading...</div>,
});

export const SparkStorm = loadable(
  () => import('./visualizations/spark-storm'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const SparksBasicDemo = loadable(
  () => import('./visualizations/sparks-basic-demo'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const SparkStormBasicDemo = loadable(
  () => import('./visualizations/spark-storm-basic-demo'),
  {
    fallback: <div>Loading...</div>,
  }
);

export const SolarStorm = loadable(
  () => import('./visualizations/solar-storm'),
  {
    fallback: <div>Loading...</div>,
  }
);
