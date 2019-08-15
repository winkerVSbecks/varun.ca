import React from 'react';
import * as DesignSystem from 'ds';

export default {
  h1: DesignSystem.H1,
  h2: DesignSystem.H2,
  h3: DesignSystem.H3,
  h4: DesignSystem.H4,
  h5: DesignSystem.H5,
  h6: DesignSystem.H6,
  p: DesignSystem.Text,
  // blockquote: DesignSystem.Blockquote,
  TweetEmbed,
  cite: DesignSystem.Cite,
  ul: DesignSystem.List,
  ol: DesignSystem.OrderedList,
  li: DesignSystem.ListItem,
  // pre:	Pre,
  // code:	Code,
  // em:	Emphasis,
  // strong:	Strong,
  // delete:	Delete,
  // code:	InlineCode,
  // hr:	Break,
  a: DesignSystem.Link,
  // img:	Image,
};

function TweetEmbed({ children, username, id }) {
  return (
    <blockquote className="twitter-tweet" data-conversation="none">
      <p lang="en" dir="ltr">
        {children}
      </p>
      ―{' '}
      <a href={`https://twitter.com/${username}/status/${id}`}>
        Tweet by @{username}
      </a>
    </blockquote>
  );
}
