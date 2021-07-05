import React from 'react';
import { H1, Box, CardLink, HorizontalScroll, Stack } from '@ds';

export const SketchesFeatured = ({ sketches, ...props }) => (
  <Box as="section" mb={6} {...props}>
    <H1 fontSize={3} mb={0} mt={3} pl={3}>
      Sketches
    </H1>

    <HorizontalScroll p={3} mr={3}>
      {sketches.map(experiment => (
        <CardLink
          key={experiment.id}
          title={experiment.name}
          link={experiment.link}
          image={experiment.image}
          flex="1 0 auto"
          mr={4}
        />
      ))}

      <Stack.MoreLink
        to="/sketches"
        bg="neutral.6"
        justifyContent="center"
        width={5}
        mt={0}
        flex="none"
      >
        View all sketches
      </Stack.MoreLink>
    </HorizontalScroll>
  </Box>
);
