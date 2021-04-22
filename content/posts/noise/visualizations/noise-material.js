import { ShaderMaterial } from 'three';
import { extend } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';

export default class NoiseMaterial extends ShaderMaterial {
  constructor(options) {
    super({
      uniforms: {
        u_time: { value: 0 },
        u_amplitude: { value: 1 },
        u_frequency: { value: 1 },
      },
      vertexShader: glsl/*glsl*/ `
        precision highp float;
        varying vec3 vNormal;

        #pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

        uniform float u_time;
        uniform float u_amplitude;
        uniform float u_frequency;

        void main () {
          vNormal = normalMatrix * normalize(normal);

          float distortion = snoise4(vec4(normal * u_frequency, u_time)) * u_amplitude;
          vec3 newPosition = position + (normal * distortion);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }`,
      fragmentShader: /* glsl */ `
        varying vec3 vNormal;

        void main(void) {
          vec3 viewNv  = normalize(vNormal);
          vec3 nvColor = viewNv * 0.5 + 0.5;
          gl_FragColor  = vec4(nvColor, 1.0);
        }
      `,
    });
  }
}

extend({ NoiseMaterial });
