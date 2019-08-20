import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, Description, PageHeader } from '@ds';
import PageLayout from '@layouts/page-layout';

const ConsoleFont = ({ data }) => (
  <PageLayout title="Console Font">
    <PageHeader title="Console Font">
      <Description mb={0}>
        A typeface created using only the silhouettes of gaming consoles.
      </Description>
    </PageHeader>

    <main>
      <GatsbyImage fluid={data.consoleFont.childImageSharp.fluid} />
    </main>
  </PageLayout>
);

export default ConsoleFont;

export const query = graphql`
  query {
    consoleFont: file(relativePath: { eq: "consolefont.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1024) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
