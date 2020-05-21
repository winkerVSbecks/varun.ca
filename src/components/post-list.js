import React from 'react';
import styled from 'styled-components';
import { SimpleLink, FlatList, ListItem, Text } from '@ds';
import { Date } from './date';

const PostLink = styled(SimpleLink)`
  :hover,
  :focus,
  :active {
    span {
      color: ${props => props.theme.colors.brand.main};
    }
  }
`;

export const PostList = ({ posts }) => (
  <FlatList mx={-3}>
    {posts.map(({ node: post }) => (
      <ListItem key={post.id} mb={0}>
        <PostLink to={post.fields.slug} display="block" p={3}>
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
        </PostLink>
      </ListItem>
    ))}
  </FlatList>
);
