import hex2rgba from 'hex2rgba';
import { createColorModeStyles } from './color-mode-styles';

const brand = {
  light: {
    main: '#4e4bec',
    bright: '#dedefb',
    faded: '#ececfd',
  },
  dark: {
    main: '#bb99ff',
    bright: '#d4d1db',
    faded: '#484858',
  },
};

const colorModes = {
  light: {
    brand: brand.light,
    neutral: {
      0: '#333',
      1: '#555',
      2: '#777',
      3: '#aaa',
      4: '#ccc',
      5: '#eee',
      6: '#f4f4f4',
      7: '#fff',
    },
    transparentNeutral: {
      0: 'rgba(255, 255, 255, 0.05)',
      1: 'rgba(255, 255, 255, .1)',
      2: 'rgba(255, 255, 255, .2)',
      3: 'rgba(255, 255, 255, .3)',
      4: 'rgba(255, 255, 255, .4)',
      5: 'rgba(255, 255, 255, .5)',
      6: 'rgba(255, 255, 255, .6)',
      7: 'rgba(255, 255, 255, .7)',
      8: 'rgba(255, 255, 255, .8)',
      9: 'rgba(255, 255, 255, .9)',
    },
    // code: {
    //   background: '#f8f8ff',
    //   backgroundInline: '#f8f8ff',
    //   selector: `#b94185`,
    //   keyword: `#096fb3`,
    //   comment: `#527713`,
    //   tag: `#137886`,
    //   regex: `#dc0437`,
    //   border: `#faede5`,
    //   text: `#866c5b`,
    //   remove: `#e45c5c`,
    //   add: `#4a9c59`,
    //   punctuation: `#53450e`,
    //   cssString: `#a2466c`,
    //   invisibles: `#e0d7d1`,
    //   lineHighlightBackground: `#fbf0ea`,
    //   scrollbarTrack: brand.light.faded,
    //   scrollbarThumb: brand.light.bright,
    // },
    code: {
      background: '#f8f8ff',
      selector: brand.light.main,
      keyword: `#ac9739`,
      comment: `#999988`,
      tag: `#9a050f`,
      regex: `#36acaa`,
      text: `#393A34`,
      remove: `#9a050f`,
      add: `#36acaa`,
      punctuation: `#393A34`,
      cssString: `##032f62`,
      invisibles: `#e0d7d1`,
      // background: '#f8f8ff',
      // selector: `#6679cc`,
      // keyword: `#ac9739`,
      // comment: `#898ea4`,
      // tag: `#3d8fd1`,
      // regex: `#22a2c9`,
      // text: `#5e6687`,
      // remove: `#e45c5c`,
      // add: `#202746`,
      // punctuation: `#5e6687`,
      // cssString: `#22a2c`,
      // invisibles: `#e0d7d1`,
      lineHighlightBackground: hex2rgba(brand.light.main, 0.1),
      scrollbarTrack: brand.light.faded,
      scrollbarThumb: brand.light.bright,
    },
  },
  dark: {
    brand: brand.dark,
    neutral: {
      // 0: '#fff',
      0: 'rgb(217, 215, 224)',
      // 0: '#f4f4f4',
      1: '#eee',
      2: '#ccc',
      3: '#aaa',
      4: '#777',
      5: '#555',
      6: '#333',
      // 7: '#111',
      7: 'rgb(19, 18, 23)',
      // hsla(0,0%,0%,0.04);
    },
    transparentNeutral: {
      0: 'rgba(0, 0, 0, 0.05)',
      1: 'rgba(0, 0, 0, .1)',
      2: 'rgba(0, 0, 0, .2)',
      3: 'rgba(0, 0, 0, .3)',
      4: 'rgba(0, 0, 0, .4)',
      5: 'rgba(0, 0, 0, .5)',
      6: 'rgba(0, 0, 0, .6)',
      7: 'rgba(0, 0, 0, .7)',
      8: 'rgba(0, 0, 0, .8)',
      9: 'rgba(0, 0, 0, .9)',
    },
    code: {
      background: '#1b191f',
      text: '#d9d7e0',
      remove: '#ff5a54',
      add: '#37b635',
      selector: '#ffe4a1',
      tag: '#2de3da',
      keyword: '#e899ce',
      comment: '#898ea4',
      punctuation: 'rgba(255,255,255,0.7 )',
      regex: '#d88489',
      cssString: '#ffb238',
      invisibles: '#e0d7d1',
      // lineHighlightBackground: '#362066',
      lineHighlightBackground: hex2rgba(brand.dark.main, 0.1),
      scrollbarThumb: '#48434f',
      scrollbarTrack: '#232129',
    },
  },
};

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
