import React, { useRef } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = ({ d, ...props }) => {
  const { gl, camera, viewport } = useThree();

  camera.left = -d * viewport.aspect;
  camera.right = d * viewport.aspect;
  camera.updateProjectionMatrix();

  const ref = useRef();
  useFrame(() => ref.current.update());
  return <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />;
};
