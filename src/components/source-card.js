import React from 'react';
import { Box, SimpleLink, Icon } from '@ds';

export const SourceCard = ({ name, link, children, ...props }) => (
  <Box
    borderWidth="1px"
    borderStyle="solid"
    borderColor="neutral.5"
    borderRadius={2}
    overflow="hidden"
    mb={4}
    {...props}
  >
    {children}
    <Box py={3} px={3} bg="neutral.5">
      <SimpleLink
        display="flex"
        alignItems="center"
        fontFamily="code"
        fontSize={0}
        href={link}
      >
        {name} <Icon ml={2} type="externalLink" />
      </SimpleLink>
    </Box>
  </Box>
);
