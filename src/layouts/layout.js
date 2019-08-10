import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { theme } from 'ds';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <MDXProvider components={{}}>
          <main>{children}</main>
        </MDXProvider>
        <footer className="pt3 pt6-ns mb6 system-sans {{ include.class }}">
          <ul className="list pl0 mb3">
            <li className="dib mr3">
              <a
                title="about varun vachhar"
                className="db b f6 tracked link dim dark-gray"
                href="{{ '/' | absolute_url }}"
              >
                About
              </a>
            </li>
            <li className="dib">
              <a
                title="{{ site.writing_desc }}"
                className="db b f6 tracked link dim dark-gray"
                href="{{ 'writing' | absolute_url }}"
              >
                Writing
              </a>
            </li>
          </ul>
          <ul className="list pl0 db">
            <li className="dib mr3">
              <a
                className="db f6 link dim dark-gray"
                title="varun vachhar on twitter"
                href="http://twitter.com/winkerVSbecks"
              >
                Twitter
              </a>
            </li>
            <li className="dib mr3">
              <a
                className="db f6 link dim dark-gray"
                title="varun vachhar on github"
                href="http://github.com/winkerVSbecks"
              >
                Github
              </a>
            </li>
            <li className="dib mr3">
              <a
                className="db f6 link dim dark-gray"
                title="varun vachhar on CodePen"
                href="http://codepen.io/winkerVSbecks"
              >
                CodePen
              </a>
            </li>
            <li className="dib mr3">
              <a
                className="db f6 link dim dark-gray"
                title="varun vachhar on dribbble"
                href="http://dribbble.com/winkerVSbecks"
              >
                Dribbble
              </a>
            </li>
            <li className="dib mr3">
              <a
                className="db f6 link dim dark-gray"
                title="email varun vachhar"
                href="mailto:varunvachhar@gmail.com"
              >
                Email
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
