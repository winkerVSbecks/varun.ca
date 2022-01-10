import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
import { VisualizationCard } from '@components/visulaization-card';
import { useCheckbox } from '@components/use-checkbox';
import { useTweak } from '@components/use-tweak';
import { Flex } from '@ds';
import { Scene } from '../scene';
import {
  createAttractor,
  updateAttractor,
  dadrasAttractor,
  aizawaAttractor,
  arneodoAttractor,
  dequanAttractor,
  lorenzAttractor,
  lorenzMod2Attractor,
} from './attractor';

const simulation = () =>
  Random.pick([
    dadrasAttractor,
    aizawaAttractor,
    arneodoAttractor,
    dequanAttractor,
    lorenzAttractor,
    lorenzMod2Attractor,
  ]);

const colors = [
  '#fbe555',
  '#fb9224',
  '#f45905',
  '#be8abf',
  '#ffeed0',
  '#feff89',
];

function FatLine({
  radius,
  simulation,
  width,
  color,
  animateAttractor,
  mapToSphere,
}) {
  const line = useRef();

  const [positions, currentPosition] = useMemo(
    () => createAttractor(6, simulation, radius, 0.005),
    [radius, simulation]
  );

  useEffect(() => {
    if (line.current) {
      for (let index = 0; index < 4; index++) {
        const nextPosition = updateAttractor(
          currentPosition,
          radius,
          simulation,
          0.005
        );

        line.current.advance(nextPosition);
      }
    }
  }, [line, currentPosition, radius, simulation]);

  useFrame(() => {
    if (line.current && animateAttractor) {
      const nextPosition = updateAttractor(
        currentPosition,
        radius,
        simulation,
        0.005,
        mapToSphere
      );

      line.current.advance(nextPosition);
    }
  });

  return (
    <mesh>
      <meshLine ref={line} attach="geometry" points={positions} />
      <meshLineMaterial
        attach="material"
        transparent
        lineWidth={width}
        color={color}
      />
    </mesh>
  );
}

export function SparkStorm({
  count,
  radius = 10,
  animateAttractor,
  mapToSphere = true,
}) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        return {
          color: Random.pick(colors),
          width: Random.range(0.1, 0.2),
          speed: Random.range(0.001, 0.002),
          simulation: simulation(),
          radius: Random.range(2, 2.25) * radius,
        };
      }),
    [count, radius]
  );

  return (
    <group>
      <group>
        {lines.map((props, index) => (
          <FatLine
            key={index}
            animateAttractor={animateAttractor}
            mapToSphere={mapToSphere}
            {...props}
          />
        ))}
      </group>
    </group>
  );
}

export default function () {
  const [animateAttractor, tweakAnimateAttractor] =
    useCheckbox('Animate Attractor');
  const [mapToSphere, tweakMapToSphere] = useCheckbox('Map to sphere', true);
  const [count, tweakCount] = useTweak('count', {
    value: 25,
    min: 1,
    max: 500,
    step: 1,
  });

  return (
    <VisualizationCard
      height={400}
      name="SparkStorm.js"
      link="https://github.com/winkerVSbecks/3d-particle-effects-demo/blob/main/src/SparkStorm.js"
      visualization={
        <Scene>
          <SparkStorm
            count={count}
            animateAttractor={animateAttractor}
            mapToSphere={mapToSphere}
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
            {tweakAnimateAttractor}
            {tweakMapToSphere}
          </Flex>
          {tweakCount}
        </>
      }
    />
  );
}
