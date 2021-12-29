import React from 'react';
import { Box } from '@ds';
import { SourceCard } from '@components/source-card';
import { Scene } from '../scene';
import { Sparks } from './sparks';
import { SparkStorm } from './spark-storm';
import { SpaceDust } from './space-dust';
import { Planet } from './planet';

export default function () {
  return (
    <SourceCard
      name="github.com/winkerVSbecks/3d-particle-effects-demo"
      link="https://github.com/winkerVSbecks/3d-particle-effects-demo/blob/main/src/Scene.js"
    >
      <Box height={400}>
        <Scene controls>
          <Planet />
          <SpaceDust count={10000} move rotate scale size />
          <Sparks
            count={20}
            dash
            animateOffset
            dashRatio={0.95}
            thickness={2}
            varyRadius
          />
          <SparkStorm count={500} animateAttractor mapToSphere />
        </Scene>
      </Box>
    </SourceCard>
  );
}
