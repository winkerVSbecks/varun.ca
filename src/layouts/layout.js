/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';

import './layout.css';

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
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {/* <MDXProvider
          components={{
            h2: props => <p {...props} style={{ color: "rebeccapurple" }} />,
          }}
        > */}
        <main>{children}</main>
        {/* </MDXProvider> */}
        <footer class="pt3 pt6-ns mb6 system-sans {{ include.class }}">
          <ul class="list pl0 mb3">
            <li class="dib mr3">
              <a
                title="about varun vachhar"
                class="db b f6 tracked link dim dark-gray"
                href="{{ '/' | absolute_url }}"
              >
                About
              </a>
            </li>
            <li class="dib">
              <a
                title="{{ site.writing_desc }}"
                class="db b f6 tracked link dim dark-gray"
                href="{{ 'writing' | absolute_url }}"
              >
                Writing
              </a>
            </li>
          </ul>
          <ul class="list pl0 db">
            <li class="dib mr3">
              <a
                class="db f6 link dim dark-gray"
                title="varun vachhar on twitter"
                href="http://twitter.com/winkerVSbecks"
              >
                Twitter
              </a>
            </li>
            <li class="dib mr3">
              <a
                class="db f6 link dim dark-gray"
                title="varun vachhar on github"
                href="http://github.com/winkerVSbecks"
              >
                Github
              </a>
            </li>
            <li class="dib mr3">
              <a
                class="db f6 link dim dark-gray"
                title="varun vachhar on CodePen"
                href="http://codepen.io/winkerVSbecks"
              >
                CodePen
              </a>
            </li>
            <li class="dib mr3">
              <a
                class="db f6 link dim dark-gray"
                title="varun vachhar on dribbble"
                href="http://dribbble.com/winkerVSbecks"
              >
                Dribbble
              </a>
            </li>
            <li class="dib mr3">
              <a
                class="db f6 link dim dark-gray"
                title="email varun vachhar"
                href="mailto:varunvachhar@gmail.com"
              >
                Email
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
