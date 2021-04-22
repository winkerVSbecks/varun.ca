import React, { useEffect, useMemo, useRef } from 'react';
import { extend } from '@react-three/fiber';
import { linspace } from 'canvas-sketch-util/math';
import * as THREE from 'three';
import * as meshline from 'three.meshline';
import { VisualizationCard } from '@components/visulaization-card';
import { useTweak } from '@components/use-tweak';
import { Scene } from '../scene';
import { Grid } from './grid';
import { noise1D } from './noise';

extend(meshline);

const noisePoints = (frequency, amplitude) =>
  linspace(40 * frequency).map(
    x => new THREE.Vector3(-10 + x * 20, noise1D(x, frequency, amplitude), 0)
  );

export default function() {
  const [frequency, tweakFrequency] = useTweak('frequency', {
    value: 3,
    min: 1,
    max: 10,
    step: 1,
  });
  const [amplitude, tweakAmplitude] = useTweak('amplitude', {
    value: 10,
    min: 1,
    max: 12,
    step: 1,
  });
  const points = useMemo(() => noisePoints(frequency, amplitude), [
    frequency,
    amplitude,
  ]);
  const line = useRef();

  useEffect(() => {
    if (line.current) {
      const points = noisePoints(frequency, amplitude);
      line.current.setPoints(points);
    }
  }, [amplitude, frequency]);

  return (
    <VisualizationCard
      visualization={
        <Scene>
          <Grid width={20} centerLines />
          <mesh>
            <meshLine ref={line} attach="geometry" points={points} />
            <meshLineMaterial
              attach="material"
              lineWidth={0.5}
              color={new THREE.Color('#89C2EF')}
            />
          </mesh>
        </Scene>
      }
      controls={
        <>
          {tweakAmplitude}
          {tweakFrequency}
        </>
      }
    />
  );
}
