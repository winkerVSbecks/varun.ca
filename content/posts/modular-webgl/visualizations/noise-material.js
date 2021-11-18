import React from 'react';
import { Sandpack } from '@components/sandpack';
import noiseShaderImg from '../../../assets/noise-shader.png';

const shader = `import glsl from 'babel-plugin-glsl/macro';

// vertex shader
export const vertexShader = glsl\`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
\`;

// fragment shader
export const fragmentShader = glsl\`
  precision highp float;
  #pragma glslify: noise = require(glsl-noise/simplex/3d.glsl);

  uniform float scale;
  uniform float size;
  uniform float density;
  uniform float time;

  uniform vec3 bg;
  uniform vec3 yellow;
  uniform vec3 orange;

  varying vec2 vUv;

  float patternLine(float v) {
    float f = abs(fract(v) - .5);
    float df = fwidth(v) * density;
    return smoothstep(0., df, f);
  }

  float loopNoise (vec2 v, float t, float scale, float offset) {
    float duration = scale;
    float current = t * scale;
    return ((duration - current) * noise(vec3(v, current + offset)) + current * noise(vec3(v, current - duration + offset))) / duration;
  }

  vec3 gradient() {
    return mix(orange, yellow, vUv.x + vUv.y);
  }

  float box(vec2 st, vec2 w){
    // bottom-left
    vec2 bl = step(w, st);
    float pct = bl.x * bl.y;

    // top-right
    vec2 tr = step(w, 1.0 - st);
    pct *= tr.x * tr.y;

    return pct;
  }

  void main () {
    vec2 p = vUv * scale;
    float amp = 0.5;
    float v = 0.0;

    v += loopNoise(p, time, 1.0, 60.0) * amp;
    amp *= 0.5;
    p *= 2.0;
    v /= size;

    float t = patternLine(v);
    t *= box(vUv, vec2(0.01));
    vec3 fragColor = mix(gradient(), bg, t);

    gl_FragColor = vec4(fragColor, 1.0);
  }
\`
`;

const code = /* jsx */ `import { useRef } from "react";
import * as THREE from 'three';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Center, shaderMaterial, Plane } from '@react-three/drei';
import { vertexShader, fragmentShader } from './shader';

const NoiseMaterial = shaderMaterial(
  {
    scale: 1.5,
    size: 0.2,
    density: 4.0,
    time: 0.0,
    bg: new THREE.Color('#111033'),
    yellow: new THREE.Color('#ffd600'),
    orange: new THREE.Color('#ff7300'),
  },
  vertexShader,
  fragmentShader
);

extend({ NoiseMaterial });

function Data() {
  const material = useRef();

  useFrame(({ clock }) => {
    material.current.uniforms.time.value = Math.sin(
      (2 * Math.PI * clock.getElapsedTime()) / 10
    );
  });

  return (
    <Plane args={[12, 14.75]}>
      <noiseMaterial ref={material} side={THREE.DoubleSide} />
    </Plane>
  );
}

export default function Scene() {
  return (
    <Canvas dpr={window.devicePixelRatio} camera={{ position: new THREE.Vector3(0, 0, 10) }}>
      <Center>
        <Data />
      </Center>
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
        '/shader.js': shader,
        '/styles.css': styles,
      }}
      customSetup={{
        dependencies: {
          '@react-three/fiber': '^6.0.6',
          '@react-three/drei': '^7.2.1',
          three: '^0.131.1',
          'babel-plugin-glsl': '^1.0.0',
          'babel-plugin-macros': '3.1.0',
          'glsl-noise': '^0.0.0',
          '@babel/core': '7.15.5',
        },
      }}
      fallbackImage={noiseShaderImg}
    />
  );
}
