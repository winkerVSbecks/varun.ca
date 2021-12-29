import React from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as meshline from 'three.meshline';

extend({ OrbitControls });

extend(meshline);

export const Controls = ({ d, ...props }) => {
  const { gl, camera } = useThree();
  return (
    <orbitControls
      args={[camera, gl.domElement]}
      enableZoom={false}
      {...props}
    />
  );
};

export function Scene({
  camera = { fov: 100, position: [0, 0, 30] },
  controls = false,
  children,
}) {
  return (
    <Canvas pixelRatio={window.devicePixelRatio} camera={camera}>
      <color attach="background" args={['#020207']} />
      {controls && <Controls />}
      <pointLight distance={100} intensity={4} color="white" />
      {children}
    </Canvas>
  );
}
