import { system } from 'styled-system';

export const measure = system({
  measure: {
    property: 'max-width',
    scale: 'measures',
  },
});

export const truncate = props =>
  props.truncate
    ? {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    : {};
