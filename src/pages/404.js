import React from 'react';
import Layout from '@layouts/layout';
import { Skeletor, Flex, Box, H1, Text, Link } from '@ds';

const NotFoundPage = () => (
  <Layout title="404: Page not found" pathname="/404">
    <Flex height="100vh" bg="neutral.6" alignItems="center">
      <Box as="section" measure={['narrow', 'regular']} mx="auto">
        <Flex as="header" alignItems="flex-end" justifyContent="center">
          <Skeletor
            width="1.6em"
            height="1.6em"
            mr={3}
            fontSize={[6, 8]}
            color="neutral.2"
          />
          <H1
            color="neutral.2"
            fontSize={[6, 8]}
            lineHeight="solid"
            mb={[1, 3]}
          >
            404
          </H1>
        </Flex>

        <Text
          color="neutral.2"
          fontSize={[2, 3]}
          mb={0}
          mt={[3, 4]}
          textAlign="center"
        >
          Sorry, we have misplaced that URL or it is pointing to something that
          doesn't exist. Head{' '}
          <Link fontWeight={7} color="neutral.2" to="/">
            back home
          </Link>{' '}
          to try finding it again.
        </Text>
      </Box>
    </Flex>
  </Layout>
);

export default NotFoundPage;
