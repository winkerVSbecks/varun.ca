import React from 'react';
import styled from 'styled-components';
import { Box, Link, SrOnly } from 'ds';

const ProfileLink = styled(Link)`
  text-decoration: none;
`;
ProfileLink.defaultProps = {
  color: 'neutral.0',
  fontWeight: 5,
  px: 3,
  py: [2, 3],
  mb: 0,
  flex: '1 1 auto',
  display: 'inline-block',
};

export const ProfileLinks = () => (
  <Box as="nav" measure="wide" mb={6}>
    <SrOnly as="h2">profile links</SrOnly>
    <ProfileLink to="/writing">Writing</ProfileLink>
    <ProfileLink to="http://twitter.com/winkerVSbecks">Twitter</ProfileLink>
    <ProfileLink to="http://github.com/winkerVSbecks">Github</ProfileLink>
    <ProfileLink to="http://codepen.io/winkerVSbecks">CodePen</ProfileLink>
    <ProfileLink to="http://dribbble.com/winkerVSbecks">Dribbble</ProfileLink>
  </Box>
);
