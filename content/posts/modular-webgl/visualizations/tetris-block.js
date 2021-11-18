import React from 'react';
import { Sandpack } from '@components/sandpack';

const code = /* jsx */ `import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Extrude, OrbitControls, Center } from "@react-three/drei";

const extrudeSettings = { steps: 2, depth: 10, bevelEnabled: false };
const SIDE = 10;

function Block(props) {
  const shape = React.useMemo(() => {
    const _shape = new THREE.Shape();

    _shape.moveTo(0, 0);
    _shape.lineTo(SIDE, 0);
    _shape.lineTo(SIDE, SIDE * 2);
    _shape.lineTo(0, SIDE * 2);
    _shape.lineTo(0, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE * 3);
    _shape.lineTo(-SIDE, SIDE);
    _shape.lineTo(0, SIDE);

    return _shape;
  }, []);

  return (
    <>
      <Extrude args={[shape, extrudeSettings]} {...props}>
        <meshPhysicalMaterial
          flatShading
          color="#3E64FF"
          thickness={SIDE}
          roughness={0.4}
          clearcoat={1}
          clearcoatRoughness={1}
          transmission={0.8}
          ior={1.25}
          attenuationTint="#fff"
          attenuationDistance={0}
        />
      </Extrude>
    </>
  );
}

export default function Scene() {
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      camera={{ position: new THREE.Vector3(8, 5, 40) }}
    >
      <color attach="background" args={["#06092c"]} />
      <pointLight position={[-20, 10, 25]} />
      <gridHelper
        args={[100, 20, "#4D089A", "#4D089A"]}
        position={[0, 0, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Center>
        <Block />
      </Center>
      <OrbitControls autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
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
`;

export default function () {
  return (
    <Sandpack
      files={{
        '/App.js': code,
        '/styles.css': styles,
      }}
      customSetup={{
        dependencies: {
          '@react-three/fiber': '^6.0.6',
          '@react-three/drei': '^7.2.1',
          three: '^0.131.1',
        },
      }}
    />
  );
}
