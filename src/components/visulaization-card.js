import React from 'react';
import { Box, Flex, SimpleLink, Icon } from '@ds';

export const VisualizationCard = ({
  visualization,
  controls,
  name,
  link,
  ...props
}) => (
  <Box
    borderWidth="1px"
    borderStyle="solid"
    borderColor="neutral.5"
    borderRadius={2}
    overflow="hidden"
    mb={4}
  >
    <Box height={300} {...props}>
      {visualization}
    </Box>
    <Flex flexDirection="column" justifyContent="center" bg="neutral.5" p={4}>
      {controls}
      {link && (
        <Box mt={4} mx={-4} mb={-4} py={3} px={4} bg="neutral.4">
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
      )}
    </Flex>
  </Box>
);
