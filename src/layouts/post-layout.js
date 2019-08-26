import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, H1 } from '@ds';
import { Footer } from '@components/footer';
import { Date } from '@components/date';
import { GlobalHeader } from '@components/global-header';
import Layout from './layout';

export default function PostLayout({ data: { mdx } }) {
  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      pathname={mdx.fields.slug}
      article
    >
      <Box maxWidth={7} mx="auto" px={[4, 4, 3]}>
        <GlobalHeader linkTo="/writing" />
        <Box as="article" my={6}>
          <Box as="header" mb={6}>
            <Date
              timestamp={mdx.frontmatter.timestamp}
              date={mdx.frontmatter.date}
            />
            <H1 mt={1} mb={4}>
              {mdx.frontmatter.title}
            </H1>
          </Box>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
        <Footer />
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
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
`;
