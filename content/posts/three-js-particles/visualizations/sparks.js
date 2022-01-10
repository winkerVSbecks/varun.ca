import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Random from 'canvas-sketch-util/random';
import { VisualizationCard } from '@components/visulaization-card';
import { useCheckbox } from '@components/use-checkbox';
import { useTweak } from '@components/use-tweak';
import { Flex } from '@ds';
import { Scene } from '../scene';

const colors = [
  '#c06995',
  '#de77c7',
  '#df86df',
  '#d998ee',
  '#ceadf4',
  '#c6bff9',
];

const radiusVariance = () => Random.range(0.2, 1);

function FatLine({
  curve,
  width,
  color,
  speed,
  animateOffset,
  dash,
  dashRatio,
  thickness,
}) {
  const material = useRef();

  useFrame(() => {
    if (animateOffset && material.current) {
      material.current.uniforms.dashOffset.value -= speed;
    }
  });

  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        ref={material}
        transparent
        depthTest={false}
        lineWidth={width * thickness}
        color={color}
        dashArray={dash ? 0.1 : 0}
        dashRatio={dash ? dashRatio : 0}
      />
    </mesh>
  );
}

export function Sparks({
  count,
  radius = 10,
  animateOffset,
  dash,
  dashRatio,
  thickness,
  varyRadius,
}) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map((_, index) => {
        const pos = new THREE.Vector3(
          Math.sin(0) * radius * (varyRadius ? radiusVariance() : 1),
          Math.cos(0) * radius * (varyRadius ? radiusVariance() : 1),
          0
        );
        const points = new Array(30).fill().map((_, index) => {
          const angle = (index / 20) * Math.PI * 2;

          return pos
            .add(
              new THREE.Vector3(
                Math.sin(angle) * radius * (varyRadius ? radiusVariance() : 1),
                Math.cos(angle) * radius * (varyRadius ? radiusVariance() : 1),
                0
              )
            )
            .clone();
        });
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000);
        return {
          color: colors[parseInt(colors.length * Math.random(), 10)],
          width: Math.max(0.1, (0.2 * index) / 10),
          speed: Math.max(0.001, 0.004 * Math.random()),
          curve,
        };
      }),
    [count, radius, varyRadius]
  );

  return (
    <group position={[-radius * 2, -radius, -10]} scale={[1, 1.3, 1]}>
      {lines.map((props, index) => (
        <FatLine
          key={index}
          animateOffset={animateOffset}
          dash={dash}
          dashRatio={dashRatio}
          thickness={thickness}
          {...props}
        />
      ))}
    </group>
  );
}

export default function () {
  const [varyRadius, tweakVaryRadius] = useCheckbox('Radius Variance', true);
  const [animateOffset, tweakAnimateOffset] = useCheckbox('Animate Offset');
  const [dash, tweakDash] = useCheckbox('dash');
  const [lineCount, tweakLineCount] = useTweak('lineCount', {
    value: 5,
    min: 1,
    max: 20,
    step: 1,
  });
  const [dashRatio, tweakDashRatio] = useTweak('dashRatio', {
    value: 0.95,
    min: 0,
    max: 0.95,
    step: 0.05,
  });
  const [thickness, tweakThickness] = useTweak('thickness', {
    value: 2,
    min: 1,
    max: 10,
    step: 0.05,
  });

  return (
    <VisualizationCard
      height={400}
      name="Sparks.js"
      link="https://github.com/winkerVSbecks/3d-particle-effects-demo/blob/main/src/Sparks.js"
      visualization={
        <Scene>
          <Sparks
            count={lineCount}
            varyRadius={varyRadius}
            dash={dash}
            animateOffset={animateOffset}
            dashRatio={dashRatio}
            thickness={thickness}
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
            {tweakVaryRadius}
            {tweakDash}
            {tweakAnimateOffset}
          </Flex>
          {tweakLineCount}
          {tweakDashRatio}
          {tweakThickness}
        </>
      }
    />
  );
}
