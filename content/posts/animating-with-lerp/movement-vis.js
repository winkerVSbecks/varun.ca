import React, { useRef, useEffect, useContext, useMemo } from 'react';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { Box, Flex } from '@ds';
import { useTweak } from '@components/use-tweak';
import { useSelect } from '@components/use-select';
import { movementTypes } from './sketch-utils';
import { ColorModeContext } from '../../../src/use-color-mode';

const config = {
  colors: {
    bg: 'rgba(27, 25, 31, 0.0625)',
    bgSolid: getComputedStyle(document.body).getPropertyValue(
      '--varun-ca-colors-code-background'
    ),
    fg: getComputedStyle(document.body).getPropertyValue(
      '--varun-ca-colors-neutral-0'
    ),
  },
  lambda: 6,
  spring: {
    stiffness: 0.2,
    damping: 0.1,
  },
  trail: true,
  resolution: [10, 5],
};

export const MovementVis = ({
  circles,
  height = 1080,
  margin = 25,
  controls = [],
  progress = true,
  trail = false,
}) => {
  const canvasRef = useRef(null);
  const { mode: colorMode } = useContext(ColorModeContext);

  useEffect(() => {
    config.colors.bgSolid = getComputedStyle(document.body).getPropertyValue(
      '--varun-ca-colors-code-background'
    );

    config.colors.fg = getComputedStyle(document.body).getPropertyValue(
      '--varun-ca-colors-neutral-0'
    );
  }, [colorMode]);

  // tweak controls
  const [lambda, tweakLambda] = useTweak('lambda', {
    value: 6,
    min: 1,
    max: 24,
    step: 1,
  });
  const [stiffness, tweakStiffness] = useTweak('springiness', {
    value: 0.2,
    min: 0,
    max: 1,
    step: 0.05,
  });
  const [damping, tweakDamping] = useTweak('damping', {
    value: 0.1,
    min: 0,
    max: 1,
    step: 0.05,
  });
  const [motionType, tweakMotionType] = useSelect('motion', [
    'lerp',
    'damp',
    'spring',
    'slerp',
  ]);

  const data = useMemo(
    () =>
      motionType
        ? { circles: circles.map((c) => ({ ...c, type: motionType })), margin }
        : { circles, margin },
    [circles, margin, motionType]
  );

  useEffect(() => {
    let manager;
    const initSketch = async () => {
      config.progress = progress;
      config.trail = trail;
      const settings = {
        dimensions: [1080, height],
        animate: true,
        duration: 2,
        styleCanvas: false,
        canvas: canvasRef.current,
        data, //{ circles, margin },
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
  }, [canvasRef, progress, data, height, margin, trail]);

  const enabledControls = [
    { name: 'lambda', tweak: tweakLambda },
    { name: 'stiffness', tweak: tweakStiffness },
    { name: 'damping', tweak: tweakDamping },
    { name: 'motion', tweak: tweakMotionType },
  ].filter((c) => controls.includes(c.name));

  useEffect(() => {
    config.lambda = lambda;
    config.spring.stiffness = stiffness;
    config.spring.damping = damping;
    config.motionType = motionType;
  }, [lambda, stiffness, damping, motionType]);

  return (
    <Box mb={4}>
      <Box as="canvas" display="block" ref={canvasRef} width="100%" />
      {enabledControls.length > 0 && (
        <Flex
          flexDirection="column"
          justifyContent="center"
          bg="neutral.5"
          p={4}
        >
          {enabledControls.map((c) => c.tweak)}
        </Flex>
      )}
    </Box>
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

      rect(
        context,
        0,
        0,
        width,
        height,
        config.trail ? config.colors.bg : config.colors.bgSolid
      );

      circles.forEach((b) => b.render(props));

      if (config.progress) {
        progress(context, playhead, width, height, margin);
      }
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
