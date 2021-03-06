import React from 'react';
import { graphql } from 'gatsby';
import { Flex, PageHeader, CardLink, Box } from '@ds';
import PageLayout from '@layouts/page-layout';

const Projects = ({ data }) => (
  <PageLayout title="Projects" pathname="/projects">
    <PageHeader title="Projects" />
    <main>
      <Flex ml={-2} mr={-2} flexWrap="wrap">
        {data.projects.nodes.map(experiment => (
          <CardLink
            key={experiment.id}
            title={experiment.name}
            link={experiment.link}
            image={experiment.image.publicURL}
            flex="1 0 auto"
            m={2}
          />
        ))}

        <Box flex="1 0 auto" width={5} m={2} />
      </Flex>
    </main>
  </PageLayout>
);

export default Projects;

export const query = graphql`
  {
    projects: allProjectsJson {
      nodes {
        id
        name
        link
        image {
          publicURL
        }
      }
    }
  }
`;
