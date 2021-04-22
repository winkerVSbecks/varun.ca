import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { VisualizationCard } from '@components/visulaization-card';
import { useTweak } from '@components/use-tweak';
import { Scene } from '../scene';
import { Grid3D } from './grid';
import { Controls } from './controls';
import './noise-material';

const d = 15;
const radius = 10;

const NoiseSphere = React.forwardRef(({ amplitude, frequency }, ref) => {
  useFrame(() => {
    if (ref.current) {
      ref.current.material.uniforms.u_amplitude.value = amplitude;
      ref.current.material.uniforms.u_frequency.value = frequency;
    }
  });

  return (
    <mesh ref={ref}>
      <icosahedronBufferGeometry args={[radius, 60]} />
      <noiseMaterial attach="material" />
    </mesh>
  );
});

export default function() {
  const [frequency, tweakFrequency] = useTweak('frequency', {
    value: 2,
    min: 0,
    max: 10,
    step: 0.1,
  });
  const [amplitude, tweakAmplitude] = useTweak('amplitude', {
    value: 4,
    min: 0,
    max: 10,
    step: 0.5,
  });
  const sphere = useRef();

  const camera = new THREE.OrthographicCamera(-d, d, d, -d, 1, 1000);

  camera.position.set(d, d, d);
  camera.rotation.order = 'YXZ';
  camera.rotation.y = -Math.PI / 4;
  camera.rotation.x = Math.atan(-1 / Math.sqrt(2));
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return (
    <VisualizationCard
      name="visualizations/noise-3d.js"
      link="https://github.com/winkerVSbecks/varun.ca/blob/master/content/posts/noise/visualizations/noise-3d.js"
      visualization={
        <Scene camera={camera}>
          <Controls d={d} enableZoom={false} />
          <Grid3D />
          <NoiseSphere
            ref={sphere}
            amplitude={amplitude}
            frequency={frequency}
          />
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
