import React from 'react';
import { Box, Text, FlatList, SimpleLink } from '@ds';

const siteLinks = [
  { title: 'About', to: '/' },
  { title: 'Writing', to: '/writing' },
];

const socialLinks = [
  { title: 'Twitter', to: 'http://twitter.com/winkerVSbecks' },
  { title: 'Github', to: 'http://github.com/winkerVSbecks' },
  { title: 'CodePen', to: 'http://codepen.io/winkerVSbecks' },
  { title: 'Dribbble', to: 'http://dribbble.com/winkerVSbecks' },
  { title: 'Email', to: 'mailto:varunvachhar@gmail.com' },
];

export const Footer = props => (
  <Box as="footer" pt={[3, 6]} mb={6} {...props}>
    <FlatList>
      {siteLinks.map(link => (
        <Text key={link.to} as="li" display="inline-block" mb={0} mr={3}>
          <SimpleLink
            letterSpacing="tracked"
            display="block"
            fontWeight={7}
            fontSize={1}
            to={link.to}
          >
            {link.title}
          </SimpleLink>
        </Text>
      ))}
    </FlatList>
    <FlatList display="block" mb={0}>
      {socialLinks.map(link => (
        <Text key={link.to} as="li" display="inline-block" mb={0} mr={3}>
          <SimpleLink display="block" fontSize={1} to={link.to}>
            {link.title}
          </SimpleLink>
        </Text>
      ))}
    </FlatList>
  </Box>
);
