import React from 'react';
import { Box } from '@ds';

export const CodePen = ({
  title,
  user = 'winkerVSbecks',
  hash,
  height = 400,
  themeId = 26435,
  defaultTab = 'js,result',
  ...props
}) => (
  <Box
    as="iframe"
    mb={4}
    height={height}
    scrolling="no"
    title={title}
    src={`//codepen.io/${user}/embed/${hash}/?height=${height}&theme-id=${themeId}&default-tab=${defaultTab}&embed-version=2`}
    frameBorder="no"
    allowtransparency="true"
    allowFullScreen
    style={{ width: '100%' }}
    {...props}
  >
    See the Pen <a href={`http://codepen.io/${user}/pen/${hash}`}>{title}</a> by{' '}
    {user} (<a href={`http://codepen.io/${user}`}>@{user}</a>) on{' '}
    <a href="https://codepen.io">CodePen</a>.
  </Box>
);
