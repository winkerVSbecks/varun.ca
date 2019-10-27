import React from 'react';
import { Stack, Text, Box } from '@ds';

export const SpeakingFeatured = ({ speaking, ...props }) => (
  <Stack {...props}>
    <Stack.Title to="/speaking">Speaking</Stack.Title>

    {speaking.map(talk => (
      <Stack.Item
        key={talk.id}
        to={talk.link || '/'}
        justifyContent="space-between"
      >
        <Box measure="narrow" mr={3} flex="1 1 auto" truncate>
          {talk.title}
        </Box>
        <Text
          as="span"
          mb={0}
          style={{ whiteSpace: 'nowrap' }}
          lineHeight="solid"
          color="neutral.2"
          fontSize={0}
        >
          {talk.conference}
        </Text>
      </Stack.Item>
    ))}
    <Stack.MoreLink to="/speaking">View all speaking</Stack.MoreLink>
  </Stack>
);
