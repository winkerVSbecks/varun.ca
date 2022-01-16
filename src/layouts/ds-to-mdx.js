import React from 'react';
import * as DesignSystem from '@ds';
import { CallOut } from '@components/call-out';
import { CodePen } from '@components/codepen';
import { SourceCard } from '@components/source-card';

export default {
  // Components
  Flex: DesignSystem.Flex,
  flex: DesignSystem.Flex,
  Box: DesignSystem.Box,
  box: DesignSystem.Box,
  Text: DesignSystem.Text,
  Image: DesignSystem.Image,
  PImage: DesignSystem.Image,
  CallOut,
  DemoSource: DesignSystem.DemoSource,
  CodePen,
  Embed: (props) => (
    <DesignSystem.Box as="iframe" mb={4} border="none" {...props} />
  ),
  AsciiDiagram: (props) => (
    <DesignSystem.Text
      as="pre"
      lineHeight="solid"
      fontSize={1}
      fontFamily="code"
      p={3}
      mb={0}
      {...props}
    />
  ),
  AsciiDiagramContainer: (props) => (
    <DesignSystem.Flex
      as="figure"
      mx="auto"
      mb={4}
      bg="code.background"
      overflow="scroll"
      {...props}
    />
  ),
  SrOnly: DesignSystem.SrOnly,
  Video: (props) => (
    <DesignSystem.Box as="video" width="100%" mb={4} {...props} />
  ),
  SourceCard: SourceCard,
  // HTML elements
  h1: DesignSystem.H1,
  h2: DesignSystem.H2,
  h3: DesignSystem.H3,
  h4: DesignSystem.H4,
  h5: DesignSystem.H5,
  h6: DesignSystem.H6,
  p: DesignSystem.Text,
  blockquote: DesignSystem.Blockquote,
  cite: DesignSystem.Cite,
  ul: DesignSystem.List,
  ol: DesignSystem.OrderedList,
  li: DesignSystem.ListItem,
  a: DesignSystem.Link,
  img: DesignSystem.Image,
  figure: (props) => (
    <DesignSystem.Box as="figure" mt={0} ml={0} mr={0} mb={4} {...props} />
  ),
  figcaption: (props) => (
    <DesignSystem.Text
      as="figcaption"
      textAlign="center"
      fontSize={1}
      mt={3}
      mb={0}
      {...props}
    />
  ),
  th: (props) => (
    <DesignSystem.Text
      as="th"
      fontFamily="code"
      fontSize={1}
      fontWeight={8}
      lineHeight="copy"
      p={3}
      {...props}
    />
  ),
  td: (props) => (
    <DesignSystem.Text
      as="th"
      fontFamily="code"
      fontSize={1}
      fontWeight={4}
      lineHeight="copy"
      p={3}
      {...props}
    />
  ),
};
