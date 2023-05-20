import React, { useRef, useState, useEffect } from 'react';
import createShader from 'canvas-sketch-util/shader';
import canvasSketch from 'canvas-sketch';
import { Box, Flex, Text } from '@ds';
import shaders from './shaders';

const params = {};

export const SdfCrystal = ({
  width = 1080,
  height = 1080,
  activeIndex = 0,
  tweak,
  ...props
}) => {
  const canvasRef = useRef(null);
  const [tweakValue, setTweakValue] = useState(0);

  useEffect(() => {
    if (tweak) {
      setTweakValue(tweak.value);
      params[tweak.name] = tweak.value;
    }
  }, [tweak]);

  useEffect(() => {
    let manager;

    const start = async () => {
      const sketch = makeSketch(
        shaders[activeIndex],
        tweak && {
          [tweak.name]: () => params[tweak.name],
        }
      );
      manager = await canvasSketch(sketch, {
        dimensions: [width, height],
        context: 'webgl',
        animate: true,
        // duration: 10,
        canvas: canvasRef.current,
        hotkeys: false,
        // resizeCanvas: true,
        // scaleToFit: true,
        // scaleToView: true,
        styleCanvas: false,
      });
    };

    if (canvasRef.current) {
      start();
    }

    return () => {
      if (manager) {
        manager.unload();
      }
    };
  }, [canvasRef, width, height, activeIndex]);

  return (
    <Flex flexDirection="column" alignItems="center" {...props}>
      <Box as="canvas" display="block" width="100%" ref={canvasRef} />
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
              const value = parseFloat(e.target.value, 10);
              setTweakValue(value);
              params[tweak.name] = value;
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

const makeSketch =
  (fragShader, uniforms) =>
  ({ gl }) => {
    return createShader({
      gl,
      frag: fragShader,
      uniforms: {
        time: ({ time }) => time,
        resolution: ({ width, height }) => [width, height],
        playhead: ({ playhead }) => playhead,
        lensLength: () => 2,
        ...uniforms,
      },
    });
  };
