import React from 'react';
import { SimpleLink, FlatList, ListItem, Text } from '@ds';
import { Date } from './date';

export const PostList = ({ posts }) => (
  <FlatList mx={-3}>
    {posts.map(({ node: post }) => (
      <ListItem key={post.id} mb={0}>
        <SimpleLink to={post.fields.slug} display="block" p={3}>
          <Date
            timestamp={post.frontmatter.timestamp}
            date={post.frontmatter.date}
          />
          <Text
            as="span"
            display="block"
            mb={0}
            lineHeight="title"
            fontSize={[4, 5]}
          >
            {post.frontmatter.title}
          </Text>
        </SimpleLink>
      </ListItem>
    ))}
  </FlatList>
);
