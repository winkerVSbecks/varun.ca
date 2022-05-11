import React, { useRef, useState, useEffect } from 'react';
import canvasSketch from 'canvas-sketch';
import { Box, Flex, Text } from '@ds';
import { movementTypes } from './sketch-utils';

const config = {
  colors: {
    bg: 'rgba(27, 25, 31, 0.0625)',
    bgSolid: 'rgba(27, 25, 31, 1)',
    fg: 'rgb(217,215,224)',
  },
  lambda: 6,
  spring: {
    stiffness: 0.2,
    damping: 0.1,
  },
  trail: false,
  resolution: [10, 5],
  rect: {
    w: 2,
    h: 40,
  },
  span: 1,
  movement: 'damp',
};

export const LerpyRects = ({
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
    let manager;
    const initSketch = async () => {
      const settings = {
        // dimensions: [window.innerWidth > 400 ? 300 : 275, 400],
        dimensions: [1080, 1080 / 2],
        animate: true,
        duration: 2,
        styleCanvas: false,
        scaleContext: true,
        canvas: canvasRef.current,
      };

      manager = await canvasSketch(sketch, settings);
      manager.play();
    };

    if (canvasRef.current) {
      initSketch();

      return () => {
        if (manager) manager.unload();
      };
    }
  }, [canvasRef, sketchConfig, tweak, tweakValue, overrides]);

  return (
    <Flex flexDirection="column" alignItems="center" mb={4} {...props}>
      <Box
        as="canvas"
        display="block"
        ref={canvasRef}
        bg="rgba(27, 25, 31, 1)"
        p={3}
        width="100%"
      />
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
const sketch = ({ width, height, tweak, overrides }) => {
  let horRects, vertRects;

  return {
    begin({ width, height }) {
      horRects = vertRects = [];

      const stepX = width / config.resolution[0];
      const stepY = height / config.resolution[1];

      for (let x = -config.span; x <= config.resolution[0] + config.span; x++) {
        for (
          let y = -config.span;
          y <= config.resolution[1] + config.span;
          y++
        ) {
          const [ax, ay] = [x * stepX, y * stepY];
          const [hR, vR] = makeRects(
            [ax, ay],
            [config.span * stepX, config.span * stepY]
          );
          horRects.push(hR);
          vertRects.push(vR);
        }
      }
    },
    render(props) {
      const { context, width, height } = props;

      rect(
        context,
        0,
        0,
        width,
        height,
        config.trail ? config.colors.bg : config.colors.bgSolid
      );

      horRects.forEach((rect) => moveRect(rect, props));
      vertRects.forEach((rect) => moveRect(rect, props));

      horRects.forEach(({ x, y, w, h }) => {
        rect(context, x, y, w, h, config.colors.fg);
      });
      vertRects.forEach(({ x, y, w, h }) => {
        rect(context, x, y, w, h, config.colors.fg);
      });
    },
  };
};

const rect = (context, x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

function makeRects([x, y], [spanX, spanY]) {
  const w = config.rect.w;
  const h = config.rect.h;

  return [
    // horizontal
    {
      x: x - h / 2,
      y: y - w / 2,
      w: h,
      h: w,
      start: [x - h / 2, y - w / 2],
      end: [x - h / 2 + spanX, y - w / 2],
      spd: [0, 0],
    },
    // vertical
    {
      x: x - w / 2,
      y: y - h / 2,
      w,
      h,
      start: [x - w / 2, y - h / 2],
      end: [x - w / 2, y - h / 2 + spanY],
      spd: [0, 0],
    },
  ];
}

function moveRect(rect, props) {
  const [x, y] = movementTypes[config.movement](
    config,
    props,
    [rect.start, rect.end],
    [rect.x, rect.y],
    rect.spd
  );

  rect.x = x;
  rect.y = y;
}