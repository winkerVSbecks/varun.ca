import React, { useRef, useLayoutEffect } from 'react';
import Random from 'canvas-sketch-util/random';
import { mapRange } from 'canvas-sketch-util/math';
import Color from 'canvas-sketch-util/color';
import { Box } from '@ds';
import { tween } from './tween';

export const ConfettiHero = props => {
  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    if (canvasRef.current) {
      const draw = runSketch(canvasRef.current, {
        height: 400,
      });
      return draw(sketch);
    }
  }, [canvasRef]);

  return (
    <Box as="canvas" ref={canvasRef} width="100%" height={400} {...props} />
  );
};

const colors = [
  '#FB3C52',
  '#FB552A',
  '#57BAFA',
  '#F6FEA6',
  '#FC4654',
  '#FED039',
  '#B6A8DE',
  '#FB5E95',
  '#FD8533',
  '#54A976',
  '#2D76C7',
  '#FC4D5E',
  '#FDF349',
  '#459A69',
].map(c => Color.parse(c).rgb);

/**
 * Confetti Sketch
 */
const sketch = ({ width, height }) => {
  const options = {
    particleCount: 90,
    radiusRatio: 0.02,
    animDelay: 600,
    noInteractionWait: 5000,
    velocityFactor: 0.15,
    decay: 0.94,
    gravity: 3,
    x: 0,
    y: 0,
    colors,
  };

  let ANIMATION_CUED = false;

  const spreadAngle = Random.range(-Math.PI / 4, (-3 * Math.PI) / 4);

  let particles = Array.from(Array(options.particleCount).keys()).map(() =>
    createParticle({ width, height, spreadAngle }, 0, {
      ...options,
      x: 0,
      y: 0,
    })
  );

  let TICK = 0;

  const reset = () => {
    const x = Random.range(width * 0.1, width * 0.9);
    const y = Random.range(height * 0.1, height * 0.9);

    particles = resetParticles({ width, height }, x, y, particles, options);
  };

  reset();

  return ({ context, width, height }) => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    // update physics
    particles.forEach(particle => {
      updateParticle({ width, height }, TICK, particle);
    });
    // draw
    particles.forEach(particle => {
      drawParticle({ context }, TICK, particle);
    });

    TICK++;

    const animEnded = particles.every(p => !p.alive);

    if (animEnded && !ANIMATION_CUED) {
      ANIMATION_CUED = true;

      setTimeout(() => {
        reset();
        ANIMATION_CUED = false;
        TICK = 0;
      }, options.animDelay);
    }
  };
};

/**
 * Particle functions
 */
export function createParticle({ width, height, spreadAngle }, maxDist, opts) {
  const endPos = setEndLocation({ width, height }, opts.x, opts.y);

  let angle = launchAngle([opts.x, opts.y], endPos);

  const longestEdge = (width > height ? width : height) * 0.5;

  const velocity = launchVelocity(
    maxDist,
    [opts.x, opts.y],
    endPos,
    longestEdge * opts.velocityFactor
  );

  const radius = Math.max(longestEdge * opts.radiusRatio, 6);

  return {
    alive: true,
    x: opts.x,
    y: opts.y,
    velocity,
    angle,
    colors: [Random.pick(opts.colors), Random.pick(opts.colors)],
    decay: opts.decay,
    gravity: opts.gravity,
    radius,
    random: Random.range(200, 800),
    tiltAngle: Random.range(0, Math.PI * 2),
    totalTicks: Random.rangeFloor(90, 120),
    fadeOutTicks: 20,
  };
}

export function updateParticle({ width, height }, tick, particle) {
  // Move
  particle.x += Math.cos(particle.angle) * particle.velocity;

  particle.x =
    particle.x +
    Random.noise2D(particle.x / particle.random, particle.y / particle.random);

  particle.y += Math.sin(particle.angle) * particle.velocity + particle.gravity;

  particle.velocity *= particle.decay;

  // Tilt
  particle.tiltAngle =
    particle.tiltAngle +
    Random.noise2D(
      particle.x / particle.random,
      particle.y / particle.random,
      1,
      Math.PI / 16
    );

  if (particle.y > height) {
    particle.alive = false;
  }

  if (tick > particle.totalTicks + particle.fadeOutTicks) {
    particle.alive = false;
  }
}

export function drawParticle({ context }, tick, particle) {
  const fade = tween({
    time: tick,
    duration: particle.fadeOutTicks,
    delay: particle.totalTicks,
    from: 1,
    to: 0,
    ease: 'expoOut',
  });

  const size = tween({
    time: tick,
    duration: 90,
    from: particle.radius * 1.5,
    to: particle.radius,
    ease: 'expoOut',
  });

  // shadow
  context.save();
  context.beginPath();
  context.arc(particle.x, particle.y, size, 0, 2 * Math.PI, true);
  context.fillStyle = Color.style([0, 0, 0, fade]);
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
  context.shadowBlur = 4;
  context.fill();
  context.restore();
  // semi-circles
  particle.colors.forEach((color, idx) => {
    context.save();
    context.beginPath();
    context.translate(particle.x, particle.y);
    context.rotate(particle.tiltAngle);
    context.fillStyle = Color.style([...color, fade]);
    context.arc(0, 0, size, 0, Math.PI, idx === 0);
    context.fill();
    context.restore();
  });
}

export function resetParticles({ width, height }, x, y, particles, options) {
  const maxDist = dist([0, 0], [width, height]);
  const spreadAngle = Random.range(-Math.PI / 4, (-3 * Math.PI) / 4);

  return particles.map(() =>
    createParticle({ width, height, spreadAngle }, maxDist, {
      ...options,
      x,
      y,
    })
  );
}

/**
 * Particle Utils
 */
function dist([x1, y1], [x2, y2]) {
  const a = x2 - x1;
  const b = y2 - y1;

  return Math.hypot(a, b);
}

function setEndLocation({ width, height }, x, y) {
  const xBounds = [-x, width - x];
  const yBounds = [-y, height - y];

  return [x + Random.range(...xBounds), y + Random.range(...yBounds)];
}

function launchAngle([x1, y1], [x2, y2]) {
  return Math.atan2(y2 - y1, x2 - x1);
}

function launchVelocity(maxDist, startPos, endPos, startVelocity) {
  const d = dist(startPos, endPos);
  return mapRange(d, 0, maxDist, startVelocity * 0.1, 1 * startVelocity);
}

/**
 * Sketch Utils
 */
function runSketch(canvasEl, { height, ...props }) {
  const context = canvasEl.getContext('2d');
  let scaledWidth = 0;
  let scaledHeight = 0;

  function setCanvasSize() {
    const width = canvasEl.getBoundingClientRect().width;
    const scale = window.devicePixelRatio;
    canvasEl.getContext('2d').scale(scale, scale);

    scaledWidth = Math.floor(width * scale);
    scaledHeight = Math.floor(height * scale);
    canvasEl.width = scaledWidth;
    canvasEl.height = scaledHeight;
  }

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize, false);

  let running = true;

  return sketch => {
    const render = sketch({
      width: scaledWidth,
      height: scaledHeight,
      ...props,
    });

    animLoop(() => {
      render({ context, width: scaledWidth, height: scaledHeight, ...props });
      return running;
    });

    return () => {
      running = false;
    };
  };
}

function animLoop(render) {
  var running,
    lastFrame = +new Date();
  function loop(now) {
    // stop the loop if render returned false
    if (running !== false) {
      requestAnimationFrame(loop);
      running = render(now - lastFrame, now);
      lastFrame = now;
    }
  }
  loop(lastFrame);
}
