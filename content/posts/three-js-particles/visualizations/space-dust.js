import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { VisualizationCard } from '@components/visulaization-card';
import { useCheckbox } from '@components/use-checkbox';
import { useTweak } from '@components/use-tweak';
import { Flex } from '@ds';
import { Scene } from '../scene';
import Random from 'canvas-sketch-util/random';

export function SpaceDust({ count, scale, rotate, move, size }) {
  const mesh = useRef();
  const light = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(20, 120);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-50, 50);
      const y = Random.range(-50, 50);
      const z = Random.range(-50, 50);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      dummy.position.set(
        x +
          (move
            ? Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10
            : 0),
        y +
          (move
            ? Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10
            : 0),
        z +
          (move
            ? Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
            : 0)
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t);
      if (scale) {
        dummy.scale.set(s * size, s * size, s * size);
      } else {
        dummy.scale.set(size, size, size);
      }

      if (rotate) {
        dummy.rotation.set(s * 5, s * 5, s * 5);
      }

      dummy.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#050505" />
      </instancedMesh>
    </>
  );
}

export default function () {
  const [move, tweakMove] = useCheckbox('Animate Position');
  const [rotate, tweakRotate] = useCheckbox('Animate Rotate');
  const [scale, tweakScale] = useCheckbox('Animate Scale');
  const [size, tweakSize] = useTweak('size', {
    value: 1,
    min: 1,
    max: 5,
    step: 0.5,
  });

  return (
    <VisualizationCard
      height={400}
      name="SpaceDust.js"
      link="https://github.com/winkerVSbecks/3d-particle-effects-demo/blob/main/src/SpaceDust.js"
      visualization={
        <Scene>
          <SpaceDust
            count={10000}
            move={move}
            rotate={rotate}
            scale={scale}
            size={size}
          />
        </Scene>
      }
      controls={
        <>
          <Flex
            alignItems={['flex-start', 'center']}
            justifyContent="space-evenly"
            flexDirection={['column', 'row']}
          >
            {tweakScale}
            {tweakRotate}
            {tweakMove}
          </Flex>
          {tweakSize}
        </>
      }
    />
  );
}
