import React, { useRef, useState, useEffect } from 'react';
import Random from 'canvas-sketch-util/random';
import { mapRange } from 'canvas-sketch-util/math';
import Color from 'canvas-sketch-util/color';
import { Box, Flex, Text } from '@ds';
import { tween } from './tween';

export const ConfettiVis = ({
  singleParticle = false,
  decay = false,
  gravity = false,
  tilt = false,
  wobble = false,
  randomSpread = false,
  width = 300,
  height = 400,
  tweak,
  overrides,
  ...props
}) => {
  const canvasRef = useRef(null);
  const sketchConfig = {
    singleParticle,
    decay,
    gravity,
    tilt,
    wobble,
    randomSpread,
  };

  const [tweakValue, setTweakValue] = useState(0);

  useEffect(() => {
    if (tweak) {
      setTweakValue(tweak.value);
    }
  }, [tweak]);

  useEffect(() => {
    if (canvasRef.current) {
      const { draw, destroy } = runSketch(canvasRef.current, {
        width: window.innerWidth > 400 ? 300 : 275,
        height: 400,
        config: sketchConfig,
        tweak: {
          ...(tweak && { [tweak.name]: tweakValue }),
        },
        overrides,
      });

      draw(sketch);

      return destroy;
    }
  }, [canvasRef, sketchConfig, tweak, tweakValue, overrides]);

  return (
    <Flex flexDirection="column" alignItems="center" {...props}>
      <Box as="canvas" display="block" ref={canvasRef} />
      {tweak && (
        <Flex alignItems="center" mt={3}>
          <Text as="label" htmlFor={tweak.name} fontSize={2} mr={3} mb={0}>
            {tweak.name}
          </Text>
          <Box
            as="input"
            flex="1 1 auto"
            type="range"
            id={tweak.name}
            name={tweak.name}
            value={tweakValue}
            onChange={e => {
              setTweakValue(parseFloat(e.target.value, 10));
            }}
            min={tweak.min}
            max={tweak.max}
            step={tweak.step}
          />
          <Text
            fontSize={2}
            ml={3}
            mb={0}
            width={30}
            textAlign="right"
            flex="none"
          >
            {tweakValue}
          </Text>
        </Flex>
      )}
    </Flex>
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
const sketch = ({ width, height, config, tweak, overrides }) => {
  const options = {
    particleCount: config.singleParticle ? 1 : 30,
    radiusRatio: config.singleParticle ? 0.08 : 0.04,
    animDelay: 600,
    velocityFactor: config.singleParticle ? 0.1 : 0.15,
    decay: 0.94,
    gravity: 3,
    x: 0,
    y: 0,
    colors,
    ...tweak,
    ...overrides,
  };

  let ANIMATION_CUED = false;

  const spreadAngle = Random.range(-Math.PI / 4, (-3 * Math.PI) / 4);

  let particles = Array.from(Array(options.particleCount).keys()).map(() =>
    createParticle({ width, height, config, spreadAngle }, 0, {
      ...options,
      x: 0,
      y: 0,
    })
  );

  let TICK = 0;

  const reset = () => {
    const x =
      config.singleParticle || config.randomSpread
        ? width * 0.5
        : Random.range(width * 0.1, width * 0.9);
    const y =
      config.singleParticle || config.randomSpread
        ? height * 0.9
        : Random.range(height * 0.1, height * 0.9);

    particles = resetParticles(
      { width, height, config },
      x,
      y,
      particles,
      options
    );
  };

  reset();

  return ({ context, width, height }) => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    // update physics
    particles.forEach(particle => {
      updateParticle({ width, height, config }, TICK, particle);
    });
    // draw
    particles.forEach(particle => {
      drawParticle({ context, config }, TICK, particle);
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
export function createParticle(
  { width, height, config, spreadAngle },
  maxDist,
  opts
) {
  const endPos = setEndLocation({ width, height }, opts.x, opts.y);
  let angle;

  if (config.singleParticle) {
    angle = Random.range(
      -Math.PI / 2 - Math.PI / 16,
      -Math.PI / 2 + Math.PI / 16
    );
  } else if (config.randomSpread) {
    angle = spreadAngle + Random.range(-Math.PI / 8, Math.PI / 8);
  } else {
    angle = launchAngle([opts.x, opts.y], endPos);
  }

  const longestEdge = (width > height ? width : height) * 0.5;

  const velocity = launchVelocity(
    maxDist,
    [opts.x, opts.y],
    config.singleParticle
      ? [width * 0.5, Random.range(0, height * 0.25)]
      : endPos,
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

export function updateParticle({ width, height, config }, tick, particle) {
  // Move
  particle.x += Math.cos(particle.angle) * particle.velocity;
  if (config.wobble) {
    particle.x =
      particle.x +
      Random.noise2D(
        particle.x / particle.random,
        particle.y / particle.random
      );
  }

  particle.y +=
    Math.sin(particle.angle) * particle.velocity +
    (config.gravity ? particle.gravity : 0);

  if (config.decay) {
    particle.velocity *= particle.decay;
  }

  // Tilt
  if (config.tilt) {
    particle.tiltAngle =
      particle.tiltAngle +
      Random.noise2D(
        particle.x / particle.random,
        particle.y / particle.random,
        1,
        Math.PI / 16
      );
  }

  if (particle.y > height) {
    particle.alive = false;
  }

  if (tick > particle.totalTicks + particle.fadeOutTicks) {
    particle.alive = false;
  }
}

export function drawParticle({ context, config }, tick, particle) {
  const fade = tween({
    time: tick,
    duration: particle.fadeOutTicks,
    delay: particle.totalTicks,
    from: 1,
    to: 0,
    ease: 'expoOut',
  });

  const size = config.singleParticle
    ? particle.radius
    : tween({
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

export function resetParticles(
  { width, height, config },
  x,
  y,
  particles,
  options
) {
  const maxDist = dist([0, 0], [width, height]);
  const spreadAngle = Random.range(-Math.PI / 4, (-3 * Math.PI) / 4);

  return particles.map(() =>
    createParticle({ width, height, config, spreadAngle }, maxDist, {
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
function runSketch(canvasEl, { width, height, ...props }) {
  const context = canvasEl.getContext('2d');
  canvasEl.style.width = width + 'px';
  canvasEl.style.height = height + 'px';

  const scale = window.devicePixelRatio;
  canvasEl.getContext('2d').scale(scale, scale);

  const scaledWidth = Math.floor(width * scale);
  const scaledHeight = Math.floor(height * scale);
  canvasEl.width = scaledWidth;
  canvasEl.height = scaledHeight;

  let running = true;
  let destroy = () => {
    running = false;
  };

  let draw = sketch => {
    const render = sketch({
      width: scaledWidth,
      height: scaledHeight,
      ...props,
    });

    animLoop(() => {
      render({ context, width: scaledWidth, height: scaledHeight, ...props });
      return running;
    });
  };

  return { destroy, draw };
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
