import React from 'react';
import styled from 'styled-components';
import { Box } from '../design-system/primitives';
import { Image } from '../design-system/image';
import { Sandpack as SandpackComponent } from '@codesandbox/sandpack-react';
import { useColorMode } from '../use-color-mode';
import Prism from 'prismjs';

const Pre = styled(Box)`
  margin: 0 !important;
`;

export const Sandpack = ({
  editorHeight = 600,
  options,
  fallbackImage,
  ...props
}) => {
  const [mode] = useColorMode();
  let source = Prism.highlight(
    props.files['/App.js'],
    Prism.languages.javascript,
    'javascript{numberLines: true}'
  );

  return (
    <>
      <Box
        alignItems="flex-start"
        display={['block', 'block', 'none']}
        className="gatsby-highlight"
        data-language="js"
      >
        <Pre as="pre" className="language-js">
          <code
            className="language-js"
            dangerouslySetInnerHTML={{ __html: source }}
          />
        </Pre>
        <Image src={fallbackImage} />
      </Box>
      <Box
        mb={4}
        mx={[0, 0, 0, -6]}
        minHeight={editorHeight}
        display={['none', 'none', 'block']}
      >
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
    </>
  );
};
