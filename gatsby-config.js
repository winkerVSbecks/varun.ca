const path = require('path');
const mdxFeed = require('gatsby-plugin-mdx/feed');

module.exports = {
  siteMetadata: {
    title: `Varun Vachhar`,
    siteUrl: `https://varun.ca`,
    description: `I am a developer with a strong focus on design, interactivity and animation. Originally from New Delhi, I currently live in Toronto and am the Director, UI Architecture at Rangle.io. In my spare time, I like to experiment with creative coding, making triangles and other playful experiences for the web.`,
    author: `@winkerVSbecks`,
    keywords: [
      'generative design',
      'creative coding',
      'design systems',
      'javascript',
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content/assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `varun.ca`,
        short_name: `starter`,
        start_url: `/`,
        background_color: '#4e4bec',
        theme_color: '#4e4bec',
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'UA-XXXXXXXX-X',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://varun.ca`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: path.resolve('./src/layouts/post-layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
          },
          `gatsby-plugin-sharp`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              linkImagesToOriginal: false,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/content/assets`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `heading-anchor`,
              icon: `<svg aria-hidden="true" focusable="false" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentcolor" strokeWidth="2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  guid:
                    site.siteMetadata.siteUrl + '/blog' + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
  ],
};
