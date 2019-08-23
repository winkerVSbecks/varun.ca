import React from 'react';
import { H1, Box, CardLink, HorizontalScroll, Stack } from '@ds';

export const ProjectsFeatured = ({ projects, ...props }) => (
  <Box as="section" mb={6} {...props}>
    <H1 fontSize={3} mb={0} mt={3} pl={3}>
      Projects
    </H1>

    <HorizontalScroll p={3} mr={3}>
      {projects.map(project => (
        <CardLink
          key={project.id}
          title={project.name}
          link={project.link}
          image={project.image.publicURL}
          flex="1 0 auto"
          mr={4}
        />
      ))}

      <Stack.MoreLink
        to="/projects"
        bg="neutral.6"
        justifyContent="center"
        width={5}
        mt={0}
        flex="none"
      >
        View all projects
      </Stack.MoreLink>
    </HorizontalScroll>
  </Box>
);
