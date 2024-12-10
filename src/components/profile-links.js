import React from 'react';
import { Box, SimpleLink, SrOnly } from '@ds';

const profileLinks = [
  { title: 'BlueSky', to: 'https://bsky.app/profile/varun.ca' },
  { title: 'Instagram', to: 'https://www.instagram.com/vvvrnv' },
  { title: 'Github', to: 'http://github.com/winkerVSbecks' },
  { title: 'Newsletter', to: 'https://buttondown.email/vrn' },
];

export const ProfileLinks = () => (
  <Box as="nav" mb={6}>
    <SrOnly as="h2">profile links</SrOnly>
    {profileLinks.map((link) => (
      <SimpleLink
        key={link.to}
        to={link.to}
        rel="me"
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
