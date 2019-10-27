import React from 'react';
import { Stack, Box } from '@ds';
import { Date } from '@components/date';

export const WritingFeatured = ({ posts, ...props }) => (
  <Stack {...props}>
    <Stack.Title to="/writing">Writing</Stack.Title>

    {posts.map(post => (
      <Stack.Item
        key={post.id}
        to={post.fields.slug}
        justifyContent="space-between"
      >
        <Box measure="narrow" mr={3} flex="1 1 auto" truncate>
          {post.frontmatter.title}
        </Box>
        <Date
          mb={0}
          fontSize={0}
          display="block"
          style={{ whiteSpace: 'nowrap' }}
          timestamp={post.frontmatter.timestamp}
          date={post.frontmatter.date}
        />
      </Stack.Item>
    ))}
    <Stack.MoreLink to="/writing">View all posts</Stack.MoreLink>
  </Stack>
);
