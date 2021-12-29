import React from 'react';
import { TextureLoader } from 'three';
import waxRed from '../../../assets/wax_red.jpg';

const loader = new TextureLoader();
const matcap = loader.load(waxRed);

export const Planet = () => {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[12, 32, 32]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};
