import React from 'react';
import { Stack, StackTitle, StackItem, StackMoreLink } from '@ds';

export const WritingFeatured = ({ posts }) => (
  <Stack>
    <Stack.Title to="/writing">Writing</Stack.Title>

    {posts.map(post => (
      <Stack.Item key={post.id} to={post.fields.slug}>
        {post.frontmatter.title}
      </Stack.Item>
    ))}
    <Stack.MoreLink to="/writing">View all posts</Stack.MoreLink>
  </Stack>
);
