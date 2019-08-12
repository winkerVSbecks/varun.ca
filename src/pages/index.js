import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import Layout from 'layouts/layout';
import SEO from 'components/seo';
import { Pronunciation } from 'components/pronunciation';
import { Box, H1, Text, Link, Icon, H2 } from 'ds';

const GlobalStyle = createGlobalStyle`
  ::-moz-selection {
    background: ${props => props.theme.colors.brand.faded};
  }

  ::selection {
    background: ${props => props.theme.colors.brand.faded};
  }
`;

const Home = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            writingDesc
            keywords
          }
        }
      }
    `
  );

  return (
    <Layout>
      <GlobalStyle />
      <SEO title="Varun Vachhar" keywords={site.siteMetadata.keywords} />

      <Box maxWidth={9} mx="auto" px={[0, 0, 5]}>
        <Box as="header" mt={6} mb={5} px={3}>
          <H1 fontSize={3} mb={0} lineHeight="copy">
            <Pronunciation />
          </H1>
          <Text mt={0} measure="wide">
            finder of new ways to confuse myself
          </Text>
        </Box>

        <Box as="section" mb={4} px={3}>
          <H2 mb={1} fontSize={3}>
            About
          </H2>
          <Text measure="wide">
            I am a developer with a strong focus on design, interactivity and
            animation. Originally from New Delhi, I currently live in Toronto
            and am the Director, UI Architecture at{' '}
            <Link to="https://rangle.io">Rangle.io</Link>. In my spare time, I
            like to experiment with creative coding, making{' '}
            <Link to="http://triangle.life">triangles</Link> and other playful
            experiences for the web.
          </Text>
        </Box>

        <nav className="measure-wide mb6">
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title={site.siteMetadata.writingDesc}
            href="{{ 'writing' | absolute_url }}"
          >
            Writing
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on twitter"
            href="http://twitter.com/winkerVSbecks"
          >
            Twitter
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on github"
            href="http://github.com/winkerVSbecks"
          >
            Github
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on CodePen"
            href="http://codepen.io/winkerVSbecks"
          >
            CodePen
          </a>
          <a
            className="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dn dib-ns"
            title="varun vachhar on dribbble"
            href="http://dribbble.com/winkerVSbecks"
          >
            Dribbble
          </a>
        </nav>
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query writingFeatured {
    allMdx(limit: 4) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
