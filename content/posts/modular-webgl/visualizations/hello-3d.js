import React from 'react';
import { Sandpack } from '@components/sandpack';

const code = /* jsx */ `import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function Box(props) {
  const mesh = useRef();
  // rotate the box
  useFrame((state, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  });
  // draw the box
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFAE00" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
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

canvas {
  background-color: #06092c;
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
          three: '^0.127.0',
        },
      }}
    />
  );
}
