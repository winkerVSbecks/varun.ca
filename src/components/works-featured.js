import React from 'react';
import styled from 'styled-components';
import { H1, Box, CardLink, HorizontalScroll, Stack, SimpleLink } from '@ds';

const WorkLink = styled(SimpleLink)`
  :hover,
  :focus,
  :active {
    color: initial;
    text-decoration: none;
  }
`;

export const WorksFeatured = ({ works, ...props }) => (
  <Box as="section" mb={6} {...props}>
    <H1 fontSize={3} mb={0} mt={3} pl={3}>
      <WorkLink to="/work">Work</WorkLink>
    </H1>

    <HorizontalScroll p={3} mr={3}>
      {works.map(project => (
        <CardLink
          key={project.id}
          title={project.name}
          link={project.link}
          image={project.image}
          flex="1 0 auto"
          mr={4}
        />
      ))}

      <Stack.MoreLink
        to="/work"
        bg="neutral.6"
        justifyContent="center"
        width={5}
        mt={0}
        flex="none"
      >
        View all works
      </Stack.MoreLink>
    </HorizontalScroll>
  </Box>
);
