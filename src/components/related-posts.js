import React from 'react';
import { Box, H1, List, ListItem, SimpleLink } from '@ds';
import { Date } from './date';

export const RelatedPosts = ({ posts }) => (
  <Box
    as="aside"
    borderTopWidth="2px"
    borderTopColor="neutral.5"
    borderTopStyle="solid"
    py={4}
  >
    <H1 fontSize={3} mb={3} mt={3}>
      Related Posts
    </H1>

    <List pl={4}>
      {posts.map(post => (
        <ListItem key={post.title}>
          <SimpleLink to={post.url} color="neutral.0" title={post.title}>
            {post.title} <Date date={post.date} timestamp={post.timestamp} />
          </SimpleLink>
        </ListItem>
      ))}
    </List>
  </Box>
);
