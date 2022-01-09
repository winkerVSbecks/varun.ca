import React from 'react';
import { Box } from '@ds';
import { Scene } from '../scene';
import { Sparks } from './sparks';
import { Planet } from './planet';

export default function () {
  return (
    <Box height={300} mb={4}>
      <Scene>
        <Planet />
        <Sparks
          count={20}
          dash
          animateOffset
          dashRatio={0.95}
          thickness={2}
          varyRadius
        />
      </Scene>
    </Box>
  );
}
