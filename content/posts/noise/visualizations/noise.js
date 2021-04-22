import SimplexNoise from 'simplex-noise';

const simplex = new SimplexNoise();

export function noise1D(x, frequency, amplitude) {
  return simplex.noise2D(x * frequency, 0) * amplitude;
}

export function noise2D(x, y, frequency, amplitude) {
  return simplex.noise2D(x * frequency, y * frequency) * amplitude;
}

export function noise3D(x, y, z, frequency, amplitude) {
  return (
    simplex.noise3D(x * frequency, y * frequency, z * frequency) * amplitude
  );
}

export function noise4D(x, y, z, w, frequency, amplitude) {
  return (
    simplex.noise4D(
      x * frequency,
      y * frequency,
      z * frequency,
      w * frequency
    ) * amplitude
  );
}
