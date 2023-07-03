import glsl from 'babel-plugin-glsl/macro';

const basicFragmentShader = `
  precision highp float;

  uniform float time;
  varying vec2 vUv;

  void main () {
    vec3 col = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0, 2, 4));
    gl_FragColor = vec4(col, 1.0);
  }
`;

const sdfCircle = /* glsl */ `
  precision highp float;

  uniform float time;
  varying vec2 vUv;

  float sdCircle(vec2 p, float r) {
    return length(p) - r;
  }

  void main () {
    vec2 p = vUv - 0.5;
    // signed distance function in the shape of a circle
	  float d = sdCircle(p, 0.25);

    vec3 color = (d>0.0) ? vec3(0.9,0.6,0.3) : vec3(0.65,0.85,1.0);
    color = mix( color, vec3(0.0), 1.0 - smoothstep(0.0, 0.005, abs(d)) );

    gl_FragColor = vec4(color, 1.0);
  }
`;

const rayMarching101 = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;

  #pragma glslify: camera = require('glsl-camera-ray')

  float sdSphere(vec3 point, float radius) {
    return length(point) - radius;
  }

  const int steps = 90;
  const float maxdist = 20.0;
  const float precis = 0.001;

  float raymarch(vec3 rayOrigin, vec3 rayDir) {
    float latest = precis * 2.0;
    float dist = 0.0;
    float res = -1.0;

    // March along the ray
    for (int i = 0; i < steps; i++) {
      // Break if we're close enough or too far away
      if (latest < precis || dist > maxdist) break;
      // Get the SDF distance
      float latest = sdSphere(rayOrigin + rayDir * dist, 1.0);
      // Increment by the latest SDF distance
      dist += latest;
    }
    // if we're still within bounds,
    // set the result to the distance
    if (dist < maxdist) {
      res = dist;
    }

    return res;
  }

  void main() {
    vec3 color = vec3(0.0);

    // Bootstrap a raymarching scene
    vec3 rayOrigin = vec3(3.5, 0., 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);

    float collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision > -0.5) {
      color = vec3(0.678, 0.106, 0.176);
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const rayMarchingWithModules = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdTorus(p, vec2(0.75, 0.35));
    return vec2(d, 0.0);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      color = vec3(0.678, 0.106, 0.176);
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const calculatingNormals = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdTorus(p, vec2(0.75, 0.35));
    return vec2(d, 0.0);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      // Determine the point of collision
      vec3 pos = rayOrigin + rayDirection * collision.x;
      // Calculate the normal
      vec3 nor = normal(pos);
      // Convert the normal to a color
      color = nor * 0.5 + 0.5;
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const phongLighting = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')
  #pragma glslify: blinnPhongSpec = require('glsl-specular-blinn-phong')

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdTorus(p, vec2(0.75, 0.35));
    return vec2(d, 0.0);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);
    vec3 lightPos = vec3(1, 1, 1);
    vec3 tint = vec3(0.678, 0.106, 0.176);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      // Determine the point of collision
      vec3 pos = rayOrigin + rayDirection * collision.x;
      // Calculate the normal
      vec3 nor = normal(pos);

      // Calculate light intensity
      vec3 eyeDirection = normalize(rayOrigin - pos);
      vec3 lightDirection = normalize(lightPos - pos);
      float power = blinnPhongSpec(lightDirection, eyeDirection, nor, 0.5);
      color = power * tint;
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const iridescentMaterial = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;
  uniform float activeLayers;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')
  #pragma glslify: blinnPhongSpec = require('glsl-specular-blinn-phong')

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdTorus(p, vec2(0.75, 0.35));
    return vec2(d, 0.0);
  }

  vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
  }

  vec3 spectrum(float n) {
    return pal( n, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );
  }

  const float GAMMA = 2.2;

  vec3 gamma(vec3 color, float g) {
    return pow(color, vec3(g));
  }

  vec3 linearToScreen(vec3 linearRGB) {
    return gamma(linearRGB, 1.0 / GAMMA);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);
    vec3 lightPos = vec3(1, 1, 1);
    vec3 tint = vec3(0.678, 0.106, 0.176);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      // Determine the point of collision
      vec3 pos = rayOrigin + rayDirection * collision.x;
      // Calculate the normal
      vec3 nor = normal(pos);

      vec3 eyeDirection = normalize(rayOrigin - pos);
      vec3 lightDirection = normalize(lightPos - pos);

      color = tint;

      if (activeLayers > 0.0)  {
        // Iridescent lighting
        vec3 reflection = reflect(rayDirection, nor);
        // base layer
        vec3 perturb = sin(pos * 10.);
        color = spectrum(dot(nor + perturb * .05, eyeDirection) * 2.);
        // specular
        float specular = clamp(dot(reflection, lightDirection), 0., 1.);
        specular = pow((sin(specular * 20. - 3.) * .5 + .5) + .1, 32.) * specular;
        specular *= .1;
        specular += pow(clamp(dot(reflection, lightDirection), 0., 1.) + .3, 8.) * .1;
        // shadow
        vec3 dome = vec3(0, 1, 0);
        float shadow = pow(clamp(dot(nor, dome) * .5 + 1.2, 0., 1.), 3.);

        if (activeLayers > 1.0) {
          color = color * shadow;
        }
        if (activeLayers > 2.0) {
          color = color * shadow + specular;
        }
      }
      // gamma correction
      color = linearToScreen(color);
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const mixLights = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;
  uniform float mixBaseAndIridescent;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')
  #pragma glslify: blinnPhongSpec = require('glsl-specular-blinn-phong')

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdTorus(p, vec2(0.75, 0.35));
    return vec2(d, 0.0);
  }

  vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
  }

  vec3 spectrum(float n) {
    return pal( n, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );
  }

  const float GAMMA = 2.2;

  vec3 gamma(vec3 color, float g) {
    return pow(color, vec3(g));
  }

  vec3 linearToScreen(vec3 linearRGB) {
    return gamma(linearRGB, 1.0 / GAMMA);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);
    vec3 lightPos = vec3(1, 1, 1);
    vec3 tint = vec3(0.678, 0.106, 0.176);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      // Determine the point of collision
      vec3 pos = rayOrigin + rayDirection * collision.x;
      // Calculate the normal
      vec3 nor = normal(pos);

      vec3 eyeDirection = normalize(rayOrigin - pos);
      vec3 lightDirection = normalize(lightPos - pos);

      // Basic blinn phong lighting
      float power = blinnPhongSpec(lightDirection, eyeDirection, nor, 0.5);
      vec3 baseColor = power * tint;

      // Iridescent lighting
      vec3 reflection = reflect(rayDirection, nor);
      // base layer
      vec3 perturb = sin(pos * 10.);
      color = spectrum(dot(nor + perturb * .05, eyeDirection) * 2.);
      // specular
      float specular = clamp(dot(reflection, lightDirection), 0., 1.);
      specular = pow((sin(specular * 20. - 3.) * .5 + .5) + .1, 32.) * specular;
      specular *= .1;
      specular += pow(clamp(dot(reflection, lightDirection), 0., 1.) + .3, 8.) * .1;
      // shadow
      vec3 dome = vec3(0, 1, 0);
      float shadow = pow(clamp(dot(nor, dome) * .5 + 1.2, 0., 1.), 3.);
      color = color * shadow + specular;

      // mix blinn phong lighting and iridescent lighting
      color = mix(baseColor, color, mixBaseAndIridescent);

      // gamma correction
      color = linearToScreen(color);
    }

    gl_FragColor = vec4(color, 1);
  }
`;

const crystalGeometry = glsl/* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float lensLength;
  uniform float time;
  uniform float constructionStep;

  vec2 doModel(vec3 p);

  #pragma glslify: camera = require('glsl-camera-ray')
  #pragma glslify: raymarch = require('glsl-raytrace', map = doModel, steps = 90)
  #pragma glslify: normal = require('glsl-sdf-normal', map = doModel)
  #pragma glslify: sdTorus = require('glsl-sdf-primitives/sdTorus')
  #pragma glslify: rotate = require('glsl-rotate/rotate')
  #pragma glslify: blinnPhongSpec = require('glsl-specular-blinn-phong')

  float sdCrystal(vec3 p) {
    float c = cos(3.1415/5.), s=sqrt(0.75- c*c); // magic values
    vec3 n = vec3(-0.5, -c, s); // direction to fold things

    if (constructionStep > 0.0) {
      p = abs(p);
      p -= 2.*min(0., dot(p, n))*n;
    }

    if (constructionStep > 1.0) {
      p.xy = abs(p.xy);
      p -= 2.*min(0., dot(p, n))*n;
    }

    if (constructionStep > 2.0) {
      p.xy = abs(p.xy);
      p -= 2.*min(0., dot(p, n))*n;
    }

    float d = p.z - 1.;
    return d;
  }

  vec2 doModel(vec3 p) {
    // Spin the shape
    p.xy = rotate(p.xy, time);
    p.yz = rotate(p.yz, time);
    // Calculate SDF distance
    float d = sdCrystal(p);
    return vec2(d, 0.0);
  }

  vec3 pal( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
    return a + b*cos( 6.28318*(c*t+d) );
  }

  vec3 spectrum(float n) {
    return pal( n, vec3(0.5,0.5,0.5),vec3(0.5,0.5,0.5),vec3(1.0,1.0,1.0),vec3(0.0,0.33,0.67) );
  }

  const float GAMMA = 2.2;

  vec3 gamma(vec3 color, float g) {
    return pow(color, vec3(g));
  }

  vec3 linearToScreen(vec3 linearRGB) {
    return gamma(linearRGB, 1.0 / GAMMA);
  }

  void main() {
    vec3 color = vec3(0.0);
    // Bootstrap a raytracing scene
    vec3 rayOrigin = vec3(3.5, 0, 3.5);
    vec3 rayTarget = vec3(0, 0, 0);
    // map from 0 to 1 to -1. to 1.
    vec2 screenPos = vUv * 2.0 - 1.;
    vec3 rayDirection = camera(rayOrigin, rayTarget, screenPos, lensLength);
    vec3 lightPos = vec3(1, 1, 1);
    vec3 tint = vec3(0.678, 0.106, 0.176);

    vec2 collision = raymarch(rayOrigin, rayDirection);

    // If the ray collides, draw the surface
    if (collision.x > -0.5) {
      // Determine the point of collision
      vec3 pos = rayOrigin + rayDirection * collision.x;
      // Calculate the normal
      vec3 nor = normal(pos);

      vec3 eyeDirection = normalize(rayOrigin - pos);
      vec3 lightDirection = normalize(lightPos - pos);

      // Basic blinn phong lighting
      float power = blinnPhongSpec(lightDirection, eyeDirection, nor, 0.5);
      vec3 baseColor = power * tint;

      // Iridescent lighting
      vec3 reflection = reflect(rayDirection, nor);
      // base layer
      vec3 perturb = sin(pos * 10.);
      color = spectrum(dot(nor + perturb * .05, eyeDirection) * 2.);
      // specular
      float specular = clamp(dot(reflection, lightDirection), 0., 1.);
      specular = pow((sin(specular * 20. - 3.) * .5 + .5) + .1, 32.) * specular;
      specular *= .1;
      specular += pow(clamp(dot(reflection, lightDirection), 0., 1.) + .3, 8.) * .1;
      // shadow
      vec3 dome = vec3(0, 1, 0);
      float shadow = pow(clamp(dot(nor, dome) * .5 + 1.2, 0., 1.), 3.);
      color = color * shadow + specular;

      // mix blinn phong lighting and iridescent lighting
      color = mix(baseColor, color, 0.5);

      // gamma correction
      color = linearToScreen(color);
    }

    gl_FragColor = vec4(color, 1);
  }
`;

export default [
  basicFragmentShader,
  rayMarching101,
  rayMarchingWithModules,
  calculatingNormals,
  phongLighting,
  iridescentMaterial,
  mixLights,
  crystalGeometry,
];
