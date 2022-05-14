import React, { useRef, useState, useEffect } from 'react';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
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
  movement: Random.pick(['damp', 'spring', 'lerp']),
};

export const MovementVis = ({
  circles,
  heightScale = 0.5,
  tweak,
  margin = 25,
  ...props
}) => {
  const canvasRef = useRef(null);

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
        dimensions: [1080, 1080 * heightScale],
        animate: true,
        duration: 2,
        styleCanvas: false,
        canvas: canvasRef.current,
        data: { circles, margin },
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
  }, [canvasRef, tweak, tweakValue]);

  return (
    <Flex flexDirection="column" alignItems="center" mb={4} {...props}>
      <Box
        as="canvas"
        display="block"
        ref={canvasRef}
        // bg="code.background"
        // p={3}
        width="100%"
        onClick={() => {
          config.movement = Random.pick(['damp', 'spring', 'lerp']);
        }}
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
 * Movement type Visualization
 */
const sketch = (props) => {
  const margin = props.data.margin;

  const circles = props.data.circles.map(makeCircle);

  return {
    begin({ width, height }) {
      circles.forEach((b) => b.init({ width, height }));
    },
    render(props) {
      const { context, width, height, playhead } = props;
      // config.colors.bgSolid = getComputedStyle(document.body).getPropertyValue(
      //   '--varun-ca-colors-code-background'
      // );
      // config.colors.fg = getComputedStyle(document.body).getPropertyValue(
      //   '--varun-ca-colors-neutral-0'
      // );

      rect(
        context,
        0,
        0,
        width,
        height,
        config.trail ? config.colors.bg : config.colors.bgSolid
      );

      circles.forEach((b) => b.render(props));

      progress(context, playhead, width, height, margin);
    },
  };
};

function makeCircle({ type, start: _start, end: _end, random = false }) {
  let pos = [];
  let spd = [0, 0];
  let start, end;

  return {
    init({ width, height }) {
      if (random) {
        start = end || [
          width * Random.range(0.125, 0.875),
          height * Random.range(0.125, 0.875),
        ];
        end = [
          width * Random.range(0.125, 0.875),
          height * Random.range(0.125, 0.875),
        ];
      } else {
        start = [_start[0] * width, _start[1] * height];
        end = [_end[0] * width, _end[1] * height];
      }

      pos[0] = start[0];
      pos[1] = start[1];
    },
    render(props) {
      const { context } = props;
      pos = movementTypes[type](config, props, [start, end], pos, spd);

      const lineWidth = 4;
      const radius = 20;

      // start
      circle(context, start[0], start[1], radius, config.colors.fg, lineWidth);
      // end
      circle(context, end[0], end[1], radius, config.colors.fg, lineWidth);
      // inner
      circle(context, pos[0], pos[1], radius / 2, config.colors.fg);
    },
  };
}

const rect = (context, x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

const circle = (context, x, y, radius, color, lineWidth) => {
  context.strokeStyle = context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, false);
  context.lineWidth = lineWidth;
  if (lineWidth != null) context.stroke();
  else context.fill();
};

const progress = (context, time, width, height, margin = 0) => {
  context.fillStyle = config.colors.fg;
  context.fillRect(
    margin * 2,
    height - margin * 2,
    (width - margin * 4) * time,
    4
  );
};
