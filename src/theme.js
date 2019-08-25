const colorsModes = {
  light: {
    brand: {
      main: '#4e4bec',
      bright: '#dedefb',
      faded: '#ececfd',
    },
    neutral: [
      '#333', // 0
      '#555', // 1
      '#777', // 2
      '#aaa', // 3
      '#ccc', // 4
      '#eee', // 5
      '#f4f4f4', // 6
      '#fff', // 7
    ],
    transparentNeutral: [
      'rgba(255, 255, 255, 0.05)', // 0
      'rgba(255, 255, 255, .1)', // 1
      'rgba(255, 255, 255, .2)', // 2
      'rgba(255, 255, 255, .3)', // 3
      'rgba(255, 255, 255, .4)', // 4
      'rgba(255, 255, 255, .5)', // 5
      'rgba(255, 255, 255, .6)', // 6
      'rgba(255, 255, 255, .7)', // 7
      'rgba(255, 255, 255, .8)', // 8
      'rgba(255, 255, 255, .9)', // 9
    ],
  },
  dark: {
    brand: {
      main: '#ececfd',
      bright: '#dedefb',
      faded: '#4e4bec',
    },
    neutral: [
      '#fff', // 0
      '#f4f4f4', // 1
      '#eee', // 2
      '#ccc', // 3
      '#aaa', // 4
      '#777', // 5
      '#555', // 6
      '#333', // 7
    ],
    transparentNeutral: [
      'rgba(0, 0, 0, 0.05)', // 0
      'rgba(0, 0, 0, .1)', // 1
      'rgba(0, 0, 0, .2)', // 2
      'rgba(0, 0, 0, .3)', // 3
      'rgba(0, 0, 0, .4)', // 4
      'rgba(0, 0, 0, .5)', // 5
      'rgba(0, 0, 0, .6)', // 6
      'rgba(0, 0, 0, .7)', // 7
      'rgba(0, 0, 0, .8)', // 8
      'rgba(0, 0, 0, .9)', // 9
    ],
  },
};

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

export function createColorStyles(mode) {
  const colors = colorsModes[mode];
  return {
    colors,
    borders: {
      main: `1px solid ${colors.brand.main}`,
      bright: `1px solid ${colors.brand.bright}`,
      faded: `1px solid ${colors.brand.faded}`,
    },
  };
}
