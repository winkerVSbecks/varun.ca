import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, PageHeader, CardLink, Box } from '@ds';
import PageLayout from '@layouts/page-layout';

const Experiments = ({ data }) => (
  <PageLayout title="Experiments">
    <PageHeader title="Experiments" />
    <main>
      <div class="nl2 nr2 flex flex-wrap">
        {data.experiments.nodes.map(experiment => (
          <>
            <CardLink
              title={experiment.title}
              link={experiment.link}
              image={
                experiment.image.childImageSharp !== null
                  ? experiment.image.childImageSharp.fluid
                  : experiment.image.publicURL
              }
            />
          </>
        ))}

        <div class="flex-auto w5 ma2"></div>
      </div>
    </main>
  </PageLayout>
);

export default Experiments;

export const query = graphql`
  {
    experiments: allExperimentsJson {
      nodes {
        name
        link
        image {
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
