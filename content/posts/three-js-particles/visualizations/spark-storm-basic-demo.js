import React from 'react';
import { Box } from '@ds';
import { Scene } from '../scene';
import { SparkStorm } from './spark-storm';
import { Planet } from './planet';

export default function () {
  return (
    <Box height={300} mb={4}>
      <Scene>
        <Planet />
        <SparkStorm count={500} animateAttractor mapToSphere />
      </Scene>
    </Box>
  );
}
