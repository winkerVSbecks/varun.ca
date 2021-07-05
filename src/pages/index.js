import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@layouts/layout';
import { Box, H1, Text, Link, Flex } from '@ds';
import { Pronunciation } from '@components/pronunciation';
import { ProfileLinks } from '@components/profile-links';
import { Footer } from '@components/footer';
import { WritingFeatured } from '@components/writing-featured';
import { SpeakingFeatured } from '@components/speaking-featured';
import { WorksFeatured } from '@components/works-featured';
import { SketchesFeatured } from '@components/sketches-featured';
import { CycleMode } from '@components/cycle-mode';

const Home = ({ data }) => {
  const {
    site,
    writingFeatured: { posts },
    speakingFeatured: { speaking },
    worksFeatured: { works },
    sketchesFeatured: { sketches },
  } = data;

  return (
    <Layout title="About" description={site.siteMetadata.description}>
      <Box maxWidth={9} mx="auto" px={[0, 0, 5]} alignItems="center">
        <Flex as="header" mt={6} mb={5} px={3}>
          <Box flex="1 1 auto">
            <H1 fontSize={3} mb={0} lineHeight="copy">
              <Pronunciation />
            </H1>
            <Text mb={0} measure="wide" fontSize={2}>
              finder of new ways to confuse myself
            </Text>
          </Box>
          <CycleMode />
        </Flex>

        <main>
          <Box as="section" mb={4} px={3}>
            <H1 mb={1} fontSize={3}>
              About
            </H1>
            <Text measure="wide" fontSize={[2, 3]}>
              I’m UI developer specializing in{' '}
              <Link to="https://componentdriven.org/">component-driven</Link>{' '}
              development, design systems and generative art. I’m a DX Engineer
              at <Link to="https://www.chromatic.com/">Chromatic</Link> and a
              contributor to{' '}
              <Link to="https://storybook.js.org/">Storybook</Link>.
            </Text>
            <Text measure="wide" fontSize={[2, 3]}>
              Originally from New Delhi, I currently live in Toronto. In my
              spare time, I like to experiment with generative art, making{' '}
              <Link to="http://triangle.life">triangles</Link> and other playful
              experiences for the web.
            </Text>
          </Box>
          <ProfileLinks />
          <Flex flexWrap="wrap" justifyContent="space-between">
            <WritingFeatured posts={posts} mr={[3, 4]} />
            <SpeakingFeatured speaking={speaking} mr={3} />
          </Flex>

          <WorksFeatured works={works} />
          <SketchesFeatured sketches={sketches} />
        </main>
        <Footer px={3} />
      </Box>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }

    writingFeatured: allMdx(
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "Do MMMM, YYYY")
          timestamp: date
        }
        fields {
          slug
        }
      }
    }

    speakingFeatured: allSpeakingJson(
      limit: 4
      filter: { featured: { eq: true } }
    ) {
      speaking: nodes {
        id
        link
        title
        conference
        featured
      }
    }

    worksFeatured: allWorksJson(limit: 6) {
      works: nodes {
        id
        name: title
        link: url
        image
      }
    }

    sketchesFeatured: allSketchesJson(
      limit: 6
      filter: { featured: { eq: true } }
    ) {
      sketches: nodes {
        id
        name
        link
        image
      }
    }
  }
`;

export default Home;
