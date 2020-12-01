import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@ds';
import { useIntersection } from '@utils/useIntersection';

const StickyFigure = styled(Box).attrs({ as: 'figure', top: 5 })`
  flex: none;
  position: sticky;
  margin-left: 0;
  margin-top: 0;
`;

const ContentWithoutFigures = styled(Box)`
  figure,
  img {
    display: none;
  }
`;

export const Scroller = ({ figures = [], width, children }) => {
  const ScrollerContainerRef = useRef(null);
  const [activeFigure, setActiveFigure] = useState(0);
  useIntersection(
    ScrollerContainerRef,
    'h3',
    (entry, idx) => {
      if (entry.intersectionRatio === 1) {
        setActiveFigure(idx);
      }
    },
    { threshold: 1, rootMargin: '32px 0px -80% 0px' }
  );

  const figure = figures[activeFigure]
    ? figures[activeFigure]
    : figures[figures.length - 1];

  return (
    <Flex ref={ScrollerContainerRef} alignItems="flex-start">
      <StickyFigure
        display={['none', 'none', 'block']}
        width={width}
        mr={[3, 4]}
      >
        {figure}
      </StickyFigure>
      <ContentWithoutFigures display={['none', 'none', 'block']} maxWidth={7}>
        {children}
      </ContentWithoutFigures>
      <Box display={['block', 'block', 'none']} maxWidth={7}>
        {children}
      </Box>
    </Flex>
  );
};
