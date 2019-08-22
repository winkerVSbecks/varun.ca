import React from 'react';
import { Stack, StackTitle, StackItem, Icon } from '@ds';

export const WritingFeatured = ({ posts }) => (
  <Stack>
    <StackTitle to="/writing">
      Writing
      <Icon type="arrow-right" ml={1} />
    </StackTitle>

    {posts.map(post => (
      <StackItem key={post.id} to={post.fields.slug}>
        {post.frontmatter.title}
      </StackItem>
    ))}
  </Stack>
);
