import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'layouts/layout';
import SEO from 'components/seo';
import { Icon } from 'ds';

const Home = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            writingDesc
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO
        title="Varun Vachhar"
        keywords={['generative design', 'javascript', 'creative coding']}
      />

      <div class="mw9 center ph5-l f5 lh-copy dark-gray sans-serif">
        <header class="mt6 mb5 ph3">
          <h1 class="ma0 f4">
            <span class="js-vocalizer pointer relative bg-child bg-child-gold">
              Varun Vachhar
              <Icon
                type="speaker"
                class="br-100 bg-moon-gray child white"
                width="10"
                height="10"
                style={{ padding: 2 }}
              />
            </span>
          </h1>
          <p class="mt0 measure-wide">finder of new ways to confuse myself</p>
        </header>

        <section class="mb4 ph3">
          <h2 class="ma0 f4">About</h2>
          <p class="mt0 measure-wide">
            I am a developer with a strong focus on design, interactivity and
            animation. Originally from New Delhi, I currently live in Toronto
            and am the Director, UI Architecture at{' '}
            <a class="link dim primary" href="https://rangle.io">
              Rangle.io
            </a>
            . In my spare time, I like to experiment with creative coding,
            making{' '}
            <a class="link dim primary" href="http://triangle.life">
              triangles
            </a>{' '}
            and other playful experiences for the web.
          </p>
        </section>

        <nav class="measure-wide mb6">
          <a
            class="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title={site.siteMetadata.writingDesc}
            href="{{ 'writing' | absolute_url }}"
          >
            Writing
          </a>
          <a
            class="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on twitter"
            href="http://twitter.com/winkerVSbecks"
          >
            Twitter
          </a>
          <a
            class="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on github"
            href="http://github.com/winkerVSbecks"
          >
            Github
          </a>
          <a
            class="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dib"
            title="varun vachhar on CodePen"
            href="http://codepen.io/winkerVSbecks"
          >
            CodePen
          </a>
          <a
            class="fw5 ph3 pv2 pv3-ns flex-auto link dark-gray dim dn dib-ns"
            title="varun vachhar on dribbble"
            href="http://dribbble.com/winkerVSbecks"
          >
            Dribbble
          </a>
        </nav>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query writingFeatured {
    allMdx(limit: 4) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
