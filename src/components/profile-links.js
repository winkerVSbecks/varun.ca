import React from 'react';
import { Box, SimpleLink, SrOnly } from 'ds';

const profileLinks = [
  { title: 'Writing', to: '/writing' },
  { title: 'Twitter', to: 'http://twitter.com/winkerVSbecks' },
  { title: 'Github', to: 'http://github.com/winkerVSbecks' },
  { title: 'CodePen', to: 'http://codepen.io/winkerVSbecks' },
  { title: 'Dribbble', to: 'http://dribbble.com/winkerVSbecks' },
];

export const ProfileLinks = () => (
  <Box as="nav" measure="wide" mb={6}>
    <SrOnly as="h2">profile links</SrOnly>
    {profileLinks.map(link => (
      <SimpleLink
        key={link.to}
        to={link.to}
        fontWeight={5}
        px={3}
        py={[2, 3]}
        mb={0}
        mr={1}
        display={'inline-block'}
      >
        {link.title}
      </SimpleLink>
    ))}
  </Box>
);
