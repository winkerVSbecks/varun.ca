import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

export function Scene({
  camera = { position: [0, 0, 15] },
  bg = '#fff',
  children,
}) {
  return (
    <Canvas
      dpr={window.devicePixelRatio ? window.devicePixelRatio : 1}
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color(bg));
      }}
      camera={camera}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}
