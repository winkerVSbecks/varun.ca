import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Box } from '@ds';
import { useTweak } from '@components/use-tweak';
import { SourceCard } from '@components/source-card';
import { Scene } from '../scene';
import { Controls } from './controls';
import './noise-material-matcap';

const d = 120;
const radius = 70;

const NoiseSphere = ({
  frequency,
  amplitude,
  time,
  setTime,
  type,
  offset = 0,
  ...props
}) => {
  const sphere = useRef();

  useFrame(state => {
    if (sphere.current) {
      setTime(state.clock.elapsedTime);

      sphere.current.material.uniforms.u_amplitude.value = amplitude;
      sphere.current.material.uniforms.u_frequency.value = frequency;
      sphere.current.material.uniforms.u_time.value = time;
    }
  });

  return (
    <mesh ref={sphere} {...props}>
      <icosahedronBufferGeometry args={[radius, 60]} />
      <noiseMaterialMatCap attach="material" args={[type, offset]} />
    </mesh>
  );
};

export default function() {
  const [time, , setTime] = useTweak('time', {
    value: 0,
    min: 0,
    max: 1,
    step: 0.01,
  });

  const camera = new THREE.OrthographicCamera(-d, d, d, -d, -200, 1000);

  camera.position.set(0, 0, d);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return (
    <SourceCard
      name="visualizations/noise-4d-fancy.js"
      link="https://github.com/winkerVSbecks/varun.ca/blob/master/content/posts/noise/visualizations/noise-4d-fancy.js"
    >
      <Box height={300}>
        <Scene bg="#fffefe" camera={camera}>
          <Controls d={d} enableZoom={false} />
          <NoiseSphere
            frequency={2}
            amplitude={20}
            position={[-2.5 * radius, 0, 0]}
            time={time}
            setTime={setTime}
            type={2}
          />
          <NoiseSphere
            frequency={5}
            amplitude={5}
            position={[0, 0, 0]}
            time={time}
            setTime={setTime}
            type={1}
            offset={10}
          />
          <NoiseSphere
            frequency={1}
            amplitude={15}
            position={[2.5 * radius, 0, 0]}
            time={time}
            setTime={setTime}
            type={0}
            offset={20}
          />
        </Scene>
      </Box>
    </SourceCard>
  );
}
