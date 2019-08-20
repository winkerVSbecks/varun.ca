import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, Description, PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';

const TetheredMotion = ({ data }) => (
  <PageLayout title="Homesick">
    <PageHeader title="Homesick">
      <Description>
        An installation I built to overcome the loss of my childhood home in
        India. It had been recently sold, demolished and replaced by an
        apartment building.
      </Description>

      <Description mb={0}>
        16 metal hooks, steel cable, 4 turnbuckles, 84 sq.m. of cloth &amp;
        thread | 7.11m x 5.00m x 3.84m
      </Description>
    </PageHeader>

    <main>
      <GatsbyImage fluid={data.colours.childImageSharp.fluid} />
      <GatsbyImage fluid={data.homesick1.childImageSharp.fluid} />
      <GatsbyImage fluid={data.homesick2.childImageSharp.fluid} />
      <GatsbyImage fluid={data.homesick3.childImageSharp.fluid} />
      <GatsbyImage fluid={data.homesick4.childImageSharp.fluid} />
      <GatsbyImage fluid={data.homesick5.childImageSharp.fluid} />
      <GatsbyImage fluid={data.logo.childImageSharp.fluid} />
    </main>
  </PageLayout>
);

export default TetheredMotion;

export const query = graphql`
  query {
    colours: file(relativePath: { eq: "homesick/colours.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    homesick1: file(relativePath: { eq: "homesick/homesick1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    homesick2: file(relativePath: { eq: "homesick/homesick2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    homesick3: file(relativePath: { eq: "homesick/homesick3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    homesick4: file(relativePath: { eq: "homesick/homesick4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    homesick5: file(relativePath: { eq: "homesick/homesick5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    logo: file(relativePath: { eq: "homesick/logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
