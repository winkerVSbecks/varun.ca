import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
import { Flex, Box } from '@ds';
import { Scene } from '../scene';
import { Grid } from './grid';

function NoiseBall(props) {
  const mesh = useRef();
  useFrame(state => {
    mesh.current.position.x = Random.noise2D(
      mesh.current.position.x / 100,
      state.clock.elapsedTime / 2,
      1,
      5
    );
    mesh.current.position.y = Random.noise2D(
      50 + mesh.current.position.y / 100,
      state.clock.elapsedTime / 2,
      1,
      5
    );
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function RandomBall(props) {
  const mesh = useRef();
  useFrame(state => {
    if (state.gl.info.render.frame % 16 === 0) {
      mesh.current.position.x = Random.range(-5, 5);
      mesh.current.position.y = Random.range(-5, 5);
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="pink" />
    </mesh>
  );
}

export default function() {
  return (
    <Flex flexWrap={['wrap', 'nowrap']}>
      <Box
        width={400}
        height={300}
        flex="1 1 400px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="neutral.5"
        borderRadius={2}
        overflow="hidden"
        mr={3}
        mb={4}
      >
        <Scene>
          <Grid />
          <RandomBall position={[0, 0, 0]} />
        </Scene>
      </Box>
      <Box
        width={400}
        height={300}
        flex="1 1 400px"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="neutral.5"
        borderRadius={2}
        overflow="hidden"
        mb={4}
      >
        <Scene>
          <Grid />
          <NoiseBall position={[0, 0, 0]} />
        </Scene>
      </Box>
    </Flex>
  );
}
