import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import 'normalize.css';
import { theme } from '@ds';
import dsToMdx from './ds-to-mdx';

const GlobalStyle = createGlobalStyle`
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

const Layout = ({ maxWidth = 7, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <MDXProvider components={dsToMdx}>{children}</MDXProvider>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
