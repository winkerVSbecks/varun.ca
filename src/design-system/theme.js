const colors = {
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
};

module.exports = {
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
  colors,
  animations: {
    easeIn: '0.15s ease-in',
    easeInOut: '0.3s ease-in-out',
  },
  borders: {
    bright: `1px solid ${colors.brand.bright}`,
    faded: `1px solid ${colors.brand.faded}`,
    neutral0: `1px solid ${colors.neutral[0]}`,
  },
};
