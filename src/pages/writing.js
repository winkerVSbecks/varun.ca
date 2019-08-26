import React from 'react';
import { graphql } from 'gatsby';
import { PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';
import { PostList } from '@components/post-list';

const Writing = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <PageLayout
      title="Writing"
      description="writing about JavaScript, CSS and reactive animations."
      pathname="/writing"
      maxWidth={7}
      px={3}
    >
      <PageHeader title="Writing" />

      <main>
        <PostList posts={posts} />
      </main>
    </PageLayout>
  );
};

export const pageQuery = graphql`
  query Writing {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
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
    }
  }
`;

export default Writing;
