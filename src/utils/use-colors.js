import { useContext } from 'react';
import { ColorModeContext } from '../use-color-mode';
import { colorModes } from '../theme/colors';

export function useColors() {
  const { mode } = useContext(ColorModeContext);
  return colorModes[mode];
}
