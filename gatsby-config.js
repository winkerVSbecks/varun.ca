const path = require('path');
const theme = require('./src/design-system/theme');

module.exports = {
  siteMetadata: {
    title: `Varun Vachhar`,
    description: `I am a developer with a strong focus on design, interactivity and animation. Originally from New Delhi, I currently live in Toronto and am the Director, UI Architecture at Rangle.io. In my spare time, I like to experiment with creative coding, making triangles and other playful experiences for the web.`,
    author: `@winkerVSbecks`,
    writingDesc: 'writing about JavaScript, CSS and reactive animations.',
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
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `varun.ca`,
        short_name: `starter`,
        start_url: `/`,
        background_color: theme.colors.primary,
        theme_color: theme.colors.primary,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
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
        trackingId: `UA-22315045-9`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1152,
              sizeByPixelDensity: true,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
            },
          },
        ],
      },
    },
  ],
};
