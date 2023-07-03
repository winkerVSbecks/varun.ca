import React, { useRef, useState, useMemo, createContext } from 'react';
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
  figure:not(.show-in-both),
  img:not(.show-in-both),
  .visualization {
    display: none;
  }
`;

const options = { threshold: 1, rootMargin: '32px 0px -80% 0px' };
const headingLevel = 'h3';

export const ScrollerContext = createContext(null);

export const Scroller = ({ figures = [], width, children }) => {
  const ScrollerContainerRef = useRef(null);
  const [activeFigure, setActiveFigure] = useState(0);
  const handler = useMemo(
    () => (entry, idx) => {
      if (entry.intersectionRatio === 1) {
        setActiveFigure(idx);
      }
    },
    []
  );

  useIntersection(ScrollerContainerRef, headingLevel, handler, options);

  const figure = figures[activeFigure]
    ? figures[activeFigure]
    : figures[figures.length - 1];

  return (
    <ScrollerContext.Provider value={activeFigure}>
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
    </ScrollerContext.Provider>
  );
};
