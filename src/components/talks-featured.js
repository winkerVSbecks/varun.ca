import React from 'react';
import { Stack, Text } from '@ds';

export const TalksFeatured = ({ talks, ...props }) => (
  <Stack {...props}>
    <Stack.Title>Talks</Stack.Title>

    {talks.map(talk => (
      <Stack.Item key={talk.id} to={talk.link} justifyContent="space-between">
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
    <Stack.MoreLink to="/talks">View all talks</Stack.MoreLink>
  </Stack>
);
