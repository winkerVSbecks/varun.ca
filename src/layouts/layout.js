import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import { SEO } from '@components/seo';
import dsToMdx from './ds-to-mdx';
import { theme, createColorStyles, modeCustomProperties } from '../theme';
import prismStyles from '../theme/prism-styles';
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

  ${prismStyles}

  ::-moz-selection {
    background: ${props => props.theme.colors.brand.selection};
  }

  ::selection {
    background: ${props => props.theme.colors.brand.selection};
  }

  *:focus{
    outline-width: 1px;
    outline-style: dotted;
    outline-color: ${props => props.theme.colors.neutral[1]};
  }
`;

const Layout = ({ title, description, image, pathname, meta, children }) => {
  const [mode, setColorMode] = useColorMode();

  return (
    <ThemeProvider theme={{ ...theme, ...createColorStyles(mode) }}>
      <ColorModeContext.Provider value={{ mode, setColorMode }}>
        <>
          <SEO
            title={title}
            description={description}
            image={image}
            pathname={pathname}
            meta={meta}
          />
          <InitializeColorMode />
          <GlobalStyle />
          <MDXProvider components={dsToMdx}>{children}</MDXProvider>
        </>
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
};

export default Layout;
