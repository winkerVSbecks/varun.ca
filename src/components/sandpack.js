import React from 'react';
import { Box } from '../design-system/primitives';
import { Sandpack as SandpackComponent } from '@codesandbox/sandpack-react';
import { useColorMode } from '../use-color-mode';

export const Sandpack = ({ editorHeight = 600, options, ...props }) => {
  const [mode] = useColorMode();

  return (
    <Box mb={4} mx={[0, 0, 0, -6]} minHeight={editorHeight}>
      <SandpackComponent
        theme={mode === 'dark' ? 'codesandbox-dark' : 'codesandbox-light'}
        options={{
          editorHeight,
          ...options,
        }}
        template="react"
        {...props}
      />
    </Box>
  );
};
