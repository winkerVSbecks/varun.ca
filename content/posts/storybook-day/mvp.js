import React from 'react';
import { Sandpack } from '@components/sandpack';
import interBold from '../../assets/inter-bold.json';

const App = /* jsx */ `import * as THREE from 'three'
import * as React from 'react'
import { BlocksScene } from './BlocksScene'

import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas
        shadows
        gl={{ antialias: false, stencil: false }}
        camera={{ position: [0, 0, 30], near: 0.1, far: 60, fov: 45 }}>
        <color attach="background" args={['#E3F3FF']} />
        {/* lights */}
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 12, 12]} intensity={1} />
        <pointLight position={[20, 20, 20]} intensity={1} />
        <pointLight position={[-20, -20, -20]} intensity={1} />
        {/* Scene contents */}
        <BlocksScene />
      </Canvas>
    </div>
  )
}
`;

const BlocksScene = /* jsx */ `import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Float } from '@react-three/drei'
import * as Random from 'canvas-sketch-util/random'
import { Block, blockTypes } from './Block'
import { VersionText } from './VersionText'

const size = 5.5
const colors = ['#FC521F', '#CA90FF', '#1EA7FD', '#FFAE00', '#37D5D3', '#FC521F', '#66BF3C']

const blocks = new Array(40).fill(0).map((_, index) => ({
  id: index,
  position: [Random.range(-size * 3, size * 3), Random.range(-size, size), Random.range(-size, size)],
  size: Random.range(0.1875, 0.375) * size,
  color: Random.pick(colors),
  type: Random.pick(blockTypes),
  rotation: new THREE.Quaternion(...Random.quaternion()),
}))

export const BlocksScene = () => {
  return (
    <Suspense fallback={null}>
      <group position={[0, 0.5, 0]}>
        <VersionText />
        {blocks.map((block: any) => (
          <Float
            key={block.id}
            position={block.position}
            quaternion={block.rotation}
            scale={block.size}
            speed={1}
            rotationIntensity={2}
            floatIntensity={2}
            floatingRange={[-0.25, 0.25]}>
            <Block type={block.type} color={block.color} />
          </Float>
        ))}
      </group>
    </Suspense>
  )
}
`;

const VersionText = /* jsx */ `import React from 'react'
import * as THREE from 'three'
import { Center, Text3D } from '@react-three/drei'

const textProps = {
  font: ${JSON.stringify(interBold)},
  curveSegments: 32,
  size: 10,
  height: 2.5,
  letterSpacing: -3.25,
  bevelEnabled: true,
  bevelSize: 0.04,
  bevelThickness: 0.1,
  bevelSegments: 3,
}

const material = new THREE.MeshStandardMaterial({
  color: '#0aff4f',
  roughness: 1,
  metalness: 1,
  flatShading: true
})

export const VersionText = () => (
  <Center rotation={[-Math.PI * 0.03125, Math.PI * 0.0625, 0]}>
    <Text3D position={[-4, 0, 0]} {...textProps} material={material}>
      7.
    </Text3D>
    <Text3D position={[4, 0, 0]} {...textProps} material={material}>
      0
    </Text3D>
  </Center>
)
`;

const Block = /* jsx */ `import React from 'react'
import { Sphere, Cylinder, Torus, Cone, Box } from '@react-three/drei'

export const BLOCK_TYPES = {
  sphere: { shape: Sphere, args: [0.5, 32, 32] },
  cylinder: { shape: Cylinder, args: [0.5, 0.5, 1, 32] },
  torus: { shape: Torus, args: [0.5, 0.25, 16, 32] },
  cone: { shape: Cone, args: [0.5, 1, 32] },
  box: { shape: Box, args: [1, 1, 1] },
} as const

export type BlockType = keyof typeof BLOCK_TYPES
export const blockTypes = Object.keys(BLOCK_TYPES) as BlockType[]

interface BlockProps {
  type: BlockType
  color: string
}

export const Block = ({ type, color }: BlockProps) => {
  const Component = BLOCK_TYPES[type].shape
  return (
    <Component args={BLOCK_TYPES[type].args as any} castShadow>
      <meshPhongMaterial color={color} />
    </Component>
  )
}
`;

const styles = `
* {
  box-sizing: border-box;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: white;
}

canvas {
  touch-action: none;
}
`;

export default function () {
  return (
    <Sandpack
      files={{
        '/BlocksScene.tsx': { code: BlocksScene, active: true },
        '/VersionText.tsx': VersionText,
        '/Block.tsx': Block,
        '/App.js': App,
        '/styles.css': { code: styles, hidden: true },
      }}
      customSetup={{
        dependencies: {
          react: '^18.2.0',
          'react-dom': '^18.2.0',
          '@react-three/fiber': '^8.9.1',
          '@react-three/drei': '^9.46.0',
          '@react-three/postprocessing': '^2.7.0',
          'canvas-sketch-util': '^1.10.0',
          three: '^0.147.0',
        },
      }}
      editorHeight={600}
    />
  );
}
