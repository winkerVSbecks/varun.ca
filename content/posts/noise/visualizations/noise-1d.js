import React, { useEffect, useMemo, useRef } from 'react';
import { linspace, mapRange } from 'canvas-sketch-util/math';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { VisualizationCard } from '@components/visulaization-card';
import { useTweak } from '@components/use-tweak';
import { Scene } from '../scene';
import { Grid } from './grid';
import { noise1D } from './noise';

const noisePoints = (frequency, amplitude) =>
  linspace(40 * frequency).map(
    x => new THREE.Vector3(-10 + x * 20, noise1D(x, frequency, amplitude), 0)
  );

function Ball({ amplitude, frequency, ...props }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.position.x =
      mesh.current.position.x > 10 ? -10 : mesh.current.position.x + 0.1;
    mesh.current.position.y = noise1D(
      mapRange(mesh.current.position.x, -10, 10, 0, 1),
      frequency,
      amplitude
    );
  });

  return (
    <mesh {...props} position={[-10, 0, 0]} ref={mesh}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function() {
  const [frequency, tweakFrequency] = useTweak('frequency', {
    value: 4,
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
      name="visualizations/noise-1d.js"
      link="https://github.com/winkerVSbecks/varun.ca/blob/master/content/posts/noise/visualizations/noise-1d.js"
      visualization={
        <Scene camera={{ position: [0, 0, 18] }}>
          <Grid width={20} centerLines />
          <mesh>
            <meshLine ref={line} attach="geometry" points={points} />
            <meshLineMaterial
              attach="material"
              lineWidth={0.5}
              color={new THREE.Color('#89C2EF')}
              transparent
              opacity={0.5}
            />
          </mesh>
          <Ball amplitude={amplitude} frequency={frequency} />
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
