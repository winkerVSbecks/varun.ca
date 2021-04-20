import { ShaderMaterial, Texture, TextureLoader } from 'three';
import { extend } from '@react-three/fiber';
import glsl from 'babel-plugin-glsl/macro';
import matCapUrl1 from '../../../assets/glowy.png';
import matCapUrl2 from '../../../assets/porcelain.jpg';
import matCapUrl3 from '../../../assets/matte.jpg';

const loader = new TextureLoader();

const matCaps = [
  loader.load(matCapUrl1),
  loader.load(matCapUrl2),
  loader.load(matCapUrl3),
];

export default class NoiseMaterialMatCap extends ShaderMaterial {
  constructor(matCapType, offset) {
    super({
      uniforms: {
        u_time: { value: 0 },
        u_amplitude: { value: 1 },
        u_frequency: { value: 1 },
        u_offset: { value: offset },
        u_matCapMap: { value: matCaps[matCapType] },
      },
      vertexShader: glsl/*glsl*/ `
        precision highp float;

        #pragma glslify: snoise4 = require(glsl-noise/simplex/4d)

        uniform float u_time;
        uniform float u_amplitude;
        uniform float u_frequency;
        uniform float u_offset;

        out vec3 pos;
        out vec3 vNormal;

        void main () {
          vNormal = normalMatrix * normalize(normal);

          float distortion = snoise4(vec4(normal * u_frequency + u_offset, u_time)) * u_amplitude;
          vec3 newPosition = position + (normal * distortion);

          vec4 mvp = modelViewMatrix * vec4(newPosition, 1.0);
          pos = mvp.xyz;
          gl_Position = projectionMatrix * mvp;
        }`,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform sampler2D u_matCapMap;

        in vec3 pos;
        in vec3 vNormal;

        void main() {
          // calculate matcap coordinates.
          vec3 n = normalize(vNormal);
          vec3 eye = normalize(pos.xyz);
          vec3 r = reflect( eye, vNormal);
          float m = 2.0 * sqrt( pow(r.x, 2.0) + pow(r.y, 2.0) + pow(r.z + 1.2, 2.0) );
          vec2 vN = r.xy / m + 0.5;
          // lookup matcap
          vec3 mat = texture(u_matCapMap, vN).rgb;
          // return matcap
          gl_FragColor = vec4(mat, 1.0);
        }
      `,
    });
  }
}

extend({ NoiseMaterialMatCap });
