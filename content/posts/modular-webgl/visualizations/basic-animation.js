import React from 'react';
import { Sandpack } from '@components/sandpack';
import basingAnimImg from '../../../assets/basic-anim.gif';

const code = /* jsx */ `import { Canvas } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

function Box(props) {
  const spring = useSpring({
    loop: { reverse: true },
    from: { position: [-1, 0, 0] },
    to: { position: [1, 0, 0] }
  });

  return (
    <animated.mesh position={spring.position} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFAE00" />
    </animated.mesh>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={window.devicePixelRatio}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
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
          '@react-spring/core': '^9.2.4',
          '@react-spring/three': '^9.2.4',
          three: '^0.127.0',
        },
      }}
      editorHeight={400}
      fallbackImage={basingAnimImg}
    />
  );
}
