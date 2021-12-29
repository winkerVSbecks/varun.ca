import React, { useMemo, Suspense } from 'react';
import * as THREE from 'three';

const orange = new THREE.Color('#F79C82');

export const Grid = ({ width = 10, height = 10, centerLines = false }) => {
  const positions = useMemo(() => {
    const vertices = [];
    const step = 2;
    const divisions = width;

    for (
      let i = 0, j = -height + step, k = -width + step;
      i <= divisions - 2;
      i++, j += step, k += step
    ) {
      vertices.push(k, -height + step / 2, 0, k, height - step / 2, 0);

      if (j < height) {
        vertices.push(-width + step / 2, j, 0, width - step / 2, j, 0);
      }
    }

    return Float32Array.from(vertices);
  }, [width, height]);

  return (
    <Suspense fallback={null}>
      <group>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#cad0e4" />
        </lineSegments>
        {centerLines && (
          <>
            <mesh>
              <meshLine
                attach="geometry"
                points={[0, height, 0, 0, -height, 0]}
              />
              <meshLineMaterial
                attach="material"
                lineWidth={0.125}
                color={orange}
              />
            </mesh>
            <mesh>
              <meshLine
                attach="geometry"
                points={[-width, 0, 0, width, 0, 0]}
              />
              <meshLineMaterial
                attach="material"
                lineWidth={0.125}
                color={orange}
              />
            </mesh>
          </>
        )}
      </group>
    </Suspense>
  );
};

export const Grid3D = ({ size: [sx, sy, sz] = [15, 15, 15] }) => {
  return (
    <Suspense fallback={null}>
      <>
        <mesh>
          <meshLine attach="geometry" points={[0, sy, 0, 0, -sy, 0]} />
          <meshLineMaterial attach="material" lineWidth={0.25} color={orange} />
        </mesh>
        <mesh>
          <meshLine attach="geometry" points={[-sx, 0, 0, sx, 0, 0]} />
          <meshLineMaterial attach="material" lineWidth={0.25} color={orange} />
        </mesh>
        <mesh>
          <meshLine attach="geometry" points={[0, 0, sz, 0, 0, -sz]} />
          <meshLineMaterial attach="material" lineWidth={0.25} color={orange} />
        </mesh>
      </>
    </Suspense>
  );
};
