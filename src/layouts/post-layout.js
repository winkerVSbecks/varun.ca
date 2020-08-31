import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Box, H1, Text, Link } from '@ds';
import { Footer } from '@components/footer';
import { Date } from '@components/date';
import { GlobalHeader } from '@components/global-header';
import { RelatedPosts } from '@components/related-posts';
import Layout from './layout';

export default function PostLayout({ data: { mdx }, pageContext }) {
  return (
    <Layout
      title={mdx.frontmatter.title}
      description={mdx.excerpt}
      pathname={mdx.fields.slug}
      image={mdx.frontmatter.image ? mdx.frontmatter.image.url : null}
      meta={[
        {
          name: `author`,
          content: 'Varun Vachhar',
        },
      ]}
    >
      <Box maxWidth={7} mx="auto" px={[3, 4, 3]}>
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
        <Text mb={5} fontSize={2}>
          Questions, Comments or Suggestions?{' '}
          <Link
            href={`https://github.com/winkerVSbecks/varun.ca/issues/new?title=${mdx.frontmatter.title}`}
          >
            Open an Issue
          </Link>
        </Text>
        <RelatedPosts posts={pageContext.relatedPosts} />
        <object
          type="image/svg+xml"
          data="https://sidebar.io/webring/banner/hrtg.svg"
          height="60"
          width="225"
        />
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
        image {
          url: publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;
