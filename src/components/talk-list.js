import React from 'react';
import { Box, H2, SimpleLink, FlatList, ListItem, Text, Flex, Icon } from '@ds';

export const TalkList = ({ talks }) => (
  <FlatList>
    {talks.map(talk => (
      <ListItem key={talk.id} mb={0}>
        <Flex borderBottom="faded" alignItems="center" py={3}>
          <Box>
            <Text mb={1} lineHeight="solid" color="neutral.2" fontSize={0}>
              {talk.conference}
            </Text>
            <H2 mb={0} fontSize={2} fontWeight={5} to={talk.link}>
              {talk.title}
            </H2>
          </Box>
          <Box flex="1" />
          {talk.link && (
            <SimpleLink
              display="block"
              mb={0}
              p={2}
              lineHeight="solid"
              fontSize={1}
              title="video"
              color="neutral.2"
              to={talk.link}
            >
              <Icon type="video" />
            </SimpleLink>
          )}
          {talk.slides && (
            <SimpleLink
              display="block"
              ml={2}
              mb={0}
              p={2}
              lineHeight="solid"
              fontSize={1}
              title="slides"
              color="neutral.2"
              to={talk.slides}
            >
              <Icon type="slides" />
            </SimpleLink>
          )}
        </Flex>
      </ListItem>
    ))}
  </FlatList>
);
