import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Flex, PageHeader, CardLink, Box } from '@ds';
import PageLayout from '@layouts/page-layout';

const SketchesContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${props => props.theme.space[3]}px;
`;

const Sketches = ({ data }) => (
  <PageLayout title="Sketches" pathname="/sketches">
    <PageHeader title="Sketches" />
    <main>
      <SketchesContainer>
        {data.sketches.nodes.map(sketch => (
          <CardLink
            key={sketch.id}
            title={sketch.name}
            link={sketch.link}
            image={sketch.image}
            width="100%"
          />
        ))}
      </SketchesContainer>
    </main>
  </PageLayout>
);

export default Sketches;

export const query = graphql`
  {
    sketches: allSketchesJson {
      nodes {
        id
        name
        link
        image
      }
    }
  }
`;
