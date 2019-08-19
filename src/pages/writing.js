import React from 'react';
import { graphql } from 'gatsby';
import { H1, Divider } from 'ds';
import PageTemplate from 'layouts/page-layout';
import { PostList } from 'components/post-list';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <PageTemplate title="Writing">
      <div className="mw7 center ph3 mv6 dark-gray">
        <header>
          <H1 className="f3 f2-m f1-ns ma0">Writing</H1>
        </header>

        <Divider />

        <main>
          <PostList posts={posts} />
        </main>
      </div>
    </PageTemplate>
  );
};

export const pageQuery = graphql`
  query blogIndex {
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

export default BlogIndex;
