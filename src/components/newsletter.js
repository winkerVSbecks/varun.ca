import React from 'react';
import { H3, Text, PrimaryButton, Box, Input, Flex, SrOnly } from '@ds';

export const Newsletter = () => (
  <Box
    mb={5}
    maxWidth={7}
    mx="auto"
    as="form"
    bg="neutral.6"
    p={4}
    action="https://tinyletter.com/winkerVSbecks"
    method="post"
    target="popupwindow"
    onsubmit="window.open('https://tinyletter.com/winkerVSbecks', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
  >
    <input type="hidden" value="1" name="embed" />

    <Box mb={4}>
      <H3 fontSize={3} mb={2} mt={0}>
        Creative coding from a front-end developer's perspective
      </H3>

      <Text fontSize={2} mb={2}>
        My goal with this blog is to go beyond the basics. Breakdown my
        sketches. And make animation math approachable. The newsletter is more
        of that.
      </Text>
      <Text fontSize={2} mb={0}>
        Hear about what's got my attention—new tools and techniques I've picked
        up. Experiments I'm working on. And previews of upcoming posts.
      </Text>
    </Box>

    <SrOnly as="label" htmlFor="tlemail">
      Enter your email address
    </SrOnly>

    <Flex alignItems="center">
      <Input
        type="text"
        flex="1 1 auto"
        name="email"
        id="tlemail"
        placeholder="email@example.com"
      />
      <PrimaryButton as="input" type="submit" flex="none" value="Subscribe" />
    </Flex>
  </Box>
);
