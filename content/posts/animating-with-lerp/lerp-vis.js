import React, { useRef, useState, useEffect } from 'react';
import Random from 'canvas-sketch-util/random';
import { mapRange } from 'canvas-sketch-util/math';
import { Box, Flex, Text } from '@ds';

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
            onChange={(e) => {
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

/**
 * Confetti Sketch
 */
const sketch = ({ width, height, config, tweak, overrides }) => {
  return ({ context, width, height }) => {
    context.fillStyle = '#000';
    context.fillRect(0, 0, width, height);

    // update physics
    particles.forEach((particle) => {
      updateParticle({ width, height, config }, TICK, particle);
    });
    // draw
    particles.forEach((particle) => {
      drawParticle({ context, config }, TICK, particle);
    });

    TICK++;

    const animEnded = particles.every((p) => !p.alive);

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

  let draw = (sketch) => {
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
