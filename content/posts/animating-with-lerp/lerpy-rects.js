import React, { useRef, useEffect, useContext } from 'react';
import canvasSketch from 'canvas-sketch';
import Random from 'canvas-sketch-util/random';
import { Box } from '@ds';
import { movementTypes } from './sketch-utils';
import { ColorModeContext } from '../../../src/use-color-mode';

const movements = ['damp', 'spring', 'lerp'];

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
  trail: false,
  resolution: [10, 5],
  rect: {
    w: 2,
    h: 40,
  },
  span: 1,
  movement: Random.pick(movements),
};

export const LerpyRects = (props) => {
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

  useEffect(() => {
    let manager;
    const initSketch = async () => {
      const settings = {
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
  }, [canvasRef]);

  return (
    <Box
      as="canvas"
      display="block"
      ref={canvasRef}
      bg="code.background"
      p={3}
      width="100%"
      mb={4}
      style={{ cursor: 'pointer' }}
      onClick={() => {
        const idx = movements.indexOf(config.movement);
        config.movement = movements[idx + 1]
          ? movements[idx + 1]
          : movements[0];
      }}
      {...props}
    />
  );
};

/**
 * Lerpy rects
 */
const sketch = () => {
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
