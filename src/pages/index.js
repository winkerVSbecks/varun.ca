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
              Hi, I'm Varun, a DX engineer and a generative artist.
            </Text>
            <Text measure="wide" fontSize={[2, 3]}>
              I began my career as a front-end developer, specializing in UI
              engineering, CSS, and animation. My experience with{' '}
              <Link to="https://componentdriven.org/">
                component-driven development
              </Link>{' '}
              and design systems led me to Developer Experience. Currently, I'm
              part of the DX team at{' '}
              <Link to="https://www.chromatic.com/">Chromatic</Link> and
              contribute to{' '}
              <Link to="https://storybook.js.org/">Storybook</Link>.
            </Text>
            <Text measure="wide" fontSize={[2, 3]}>
              As an artist, I combine minimalist geometry with dynamic color
              systems and looping motion. Using web technologies—Canvas, SVG,
              WebGL & Shaders—I explore the interplay of structure and fluidity
              through code.
            </Text>
            <Text measure="wide" fontSize={[2, 3]}>
              Originally from New Delhi and now based in Toronto, I write about
              creative coding from a front-end developer's perspective.
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
