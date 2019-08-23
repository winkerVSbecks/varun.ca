import React from 'react';
import { Stack, Text } from '@ds';

export const SpeakingFeatured = ({ speaking, ...props }) => (
  <Stack {...props}>
    <Stack.Title>Speaking</Stack.Title>

    {speaking.map(talk => (
      <Stack.Item
        key={talk.id}
        to={talk.link || '/'}
        justifyContent="space-between"
      >
        {talk.title}
        <Text
          as="span"
          mb={0}
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
