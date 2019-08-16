import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'components/seo';
import { Box, H1, SimpleLink, Text } from 'ds';
import Layout from './layout';

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />

      <Box maxWidth={7} mx="auto" px={[4, 4, 3]}>
        <Box as="header" mx="auto" mt={6} display={['block', 'flex']}>
          <SimpleLink
            href="https://varun.ca/writing"
            style={{ textTransform: 'uppercase' }}
            mr={2}
            color="neutral.1"
            letterSpacing="tracked"
            fontSize={1}
            fontWeight={7}
            lineHeight="solid"
          >
            Varun Vachhar
          </SimpleLink>{' '}
          <Text
            color="neutral.3"
            fontSize={1}
            lineHeight="solid"
            letterSpacing="tracked"
            mt={[1, 0]}
            mb={0}
          >
            finder of new ways to confuse myself
          </Text>
        </Box>

        <Box as="article" my={6}>
          <Box mb={6}>
            <Text
              as="time"
              datetime={mdx.frontmatter.date}
              lineHeight="solid"
              color="neutral.2"
              fontSize={1}
            >
              {mdx.frontmatter.date}
            </Text>
            <H1 mt={1} mb={4}>
              {mdx.frontmatter.title}
            </H1>
          </Box>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Box>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY")
      }
    }
  }
`;
