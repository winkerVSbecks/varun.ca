/**
 * Absolute imports for the design system
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@ds': path.resolve(__dirname, 'src/design-system'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@theme': path.resolve(__dirname, 'src/theme'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@assets': path.resolve(__dirname, 'content/assets'),
      },
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

/**
 * Generate MDX blog posts
 */
const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "Do MMMM, YYYY")
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // We'll call `createPage` for each result
  posts.forEach(({ node }, index) => {
    const relatedPosts = [
      index + 1,
      index + 2,
      index - 1,
      index - 2,
      index - 3,
      index + 3,
    ]
      .map((idx) => posts[idx])
      .filter((v) => v)
      .slice(0, 3)
      .map((post) => ({
        url: post.node.fields.slug,
        title: post.node.frontmatter.title,
        date: post.node.frontmatter.date,
        timestamp: post.node.frontmatter.timestamp,
      }));

    createPage({
      // This is the slug we created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/layouts/post-layout.js`),
      // We can use the values in this context in
      // our post layout component
      context: {
        id: node.id,
        relatedPosts,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `${value}`,
    });
  }
};
