import React, { useContext } from 'react';
import { TransparentButton, Icon } from '@ds';
import { ColorModeContext } from '../use-color-mode';

export const CycleMode = props => {
  const { setColorMode } = useContext(ColorModeContext);

  return (
    <TransparentButton
      title="cycle colour mode"
      p={1}
      onClick={setColorMode}
      {...props}
    >
      <Icon display="block" type="themeMode" color="neutral.1" />
    </TransparentButton>
  );
};
