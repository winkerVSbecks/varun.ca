import React from 'react';
import * as DesignSystem from '@ds';
import { CallOut } from '@components/call-out';
import { CodePen } from '@components/codepen';

export default {
  // Components
  Flex: DesignSystem.Flex,
  Box: DesignSystem.Box,
  Text: DesignSystem.Text,
  Image: DesignSystem.Image,
  CallOut,
  DemoSource: DesignSystem.DemoSource,
  CodePen,
  Embed: props => <DesignSystem.Box as="iframe" mb={4} {...props} />,
  AsciiDiagram: props => (
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
  SrOnly: DesignSystem.SrOnly,
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
  // pre: props => (
  //   <DesignSystem.Text as="pre" fontSize={1} fontFamily="code" {...props} />
  // ),
  // code:	Code,
  // em:	Emphasis,
  // strong:	Strong,
  // delete:	Delete,
  // code:	InlineCode,
  // hr:	Break,
  a: DesignSystem.Link,
  img: DesignSystem.Image,
  th: props => (
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
  td: props => (
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
