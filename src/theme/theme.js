import { createColorModeStyles } from './color-mode-styles';
import { colorModes } from './colors';

export const colorModeStyles = createColorModeStyles(colorModes);

export function createColorStyles(mode) {
  const colors = colorModeStyles.colors[mode];
  const borders = colorModeStyles.borders[mode];

  return { colors, borders };
}

export const modeCustomProperties = () => colorModeStyles.globalStyles;

export const theme = {
  breakpoints: ['40em', '52em', '64em', '72em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radii: { 0: 0, 1: 2, 2: 4, 3: 8, 4: 16, pill: 9999, circle: '100%' },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  fonts: {
    systemSans:
      "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif",
    code: 'Consolas, monaco, monospace',
  },
  measures: {
    regular: '30em',
    // Measure is limited to ~80 characters
    wide: '34em',
    // Measure is limited to ~45 characters
    narrow: '20em',
  },
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    default: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  animations: {
    easeIn: '0.15s ease-in',
    easeInOut: '0.3s ease-in-out',
  },
  ...createColorStyles('light'),
};
