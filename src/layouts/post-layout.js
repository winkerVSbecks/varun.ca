import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from './layout';

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
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
      }
    }
  }
`;
