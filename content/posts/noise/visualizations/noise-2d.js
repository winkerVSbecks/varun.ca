import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VisualizationCard } from '@components/visulaization-card';
import { useTweak } from '@components/use-tweak';
import { Scene } from '../scene';
import { Grid3D } from './grid';
import { Controls } from './controls';
import { noise2D } from './noise';

const d = 15;

const NoisePlane = React.forwardRef((props, ref) => {
  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[27, 27, 30, 30]} />
        <meshBasicMaterial
          attach="material"
          color={new THREE.Color('#cad0e4')}
          wireframe
        />
      </mesh>
      <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[20, 20, 30, 30]} />
        <meshNormalMaterial
          attach="material"
          flatShading
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
});

export default function() {
  const [frequency, tweakFrequency] = useTweak('frequency', {
    value: 0.06,
    min: 0,
    max: 2,
    step: 0.01,
  });
  const [amplitude, tweakAmplitude] = useTweak('amplitude', {
    value: 3,
    min: 0,
    max: 5,
    step: 0.25,
  });
  const plane = useRef();

  useEffect(() => {
    if (plane.current) {
      updatePlane(plane, amplitude, frequency);
    }
  }, [amplitude, frequency]);

  // Trigger the noise effect on load
  // There is probably a better way to do this
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setTimeout(() => {
      if (plane.current) {
        updatePlane(plane, amplitude, frequency);
      }
    }, 1000);
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */

  const camera = new THREE.OrthographicCamera(-d, d, d, -d, 1, 1000);

  camera.position.set(d, d, d);
  camera.rotation.order = 'YXZ';
  camera.rotation.y = -Math.PI / 4;
  camera.rotation.x = Math.atan(-1 / Math.sqrt(2));
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  return (
    <VisualizationCard
      name="visualizations/noise-2d.js"
      link="https://github.com/winkerVSbecks/varun.ca/blob/master/content/posts/noise/visualizations/noise-2d.js"
      visualization={
        <Scene camera={camera}>
          <Controls d={d} enableZoom={false} />
          <Grid3D size={[15, 12, 15]} />
          <NoisePlane ref={plane} />
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

function updatePlane(plane, amplitude, frequency) {
  const rawPositions = plane.current.geometry.attributes.position.array;
  const l = rawPositions.length;

  for (let i = 0; i < l; i += 3) {
    let x = rawPositions[i];
    let y = rawPositions[i + 1];
    let z = rawPositions[i + 2];

    z = noise2D(x, y, frequency, amplitude);

    plane.current.geometry.attributes.position.set([x, y, z], i);
  }

  plane.current.geometry.attributes.position.needsUpdate = true;
}
