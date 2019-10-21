import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import { SEO } from '@components/seo';
import dsToMdx from './ds-to-mdx';
import { theme, createColorStyles, modeCustomProperties } from '../theme';
import {
  useColorMode,
  ColorModeContext,
  InitializeColorMode,
} from '../use-color-mode';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${props => props.theme.colors.neutral[7]};
    ${modeCustomProperties}
  }

  ::-moz-selection {
    background: ${props => props.theme.colors.brand.faded};
  }

  ::selection {
    background: ${props => props.theme.colors.brand.faded};
  }

  *:focus{
    outline-width: 1px;
    outline-style: dotted;
    outline-color: ${props => props.theme.colors.neutral[1]};
  }
`;

const Layout = ({ title, description, maxWidth = 7, children }) => {
  const [mode, setColorMode] = useColorMode();

  return (
    <ThemeProvider theme={{ ...theme, ...createColorStyles(mode) }}>
      <ColorModeContext.Provider value={{ mode, setColorMode }}>
        <>
          <SEO title={title} description={description} />
          <InitializeColorMode />
          <GlobalStyle />
          <MDXProvider components={dsToMdx}>{children}</MDXProvider>
        </>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
