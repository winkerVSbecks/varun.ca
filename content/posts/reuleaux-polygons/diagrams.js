import React from 'react';
import { Flex, SrOnly, SVG } from '@ds';

function ReuleauxPolygons() {
  return (
    <Flex
      as="figure"
      backgroundColor={'#A9D7FD'}
      height={'12.5rem'}
      mb={6}
      mx={0}
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      <div>
        <SVG
          fill="none"
          stroke="#2F3030"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          display="block"
          width={4}
          height={4}
          mx="auto"
          viewBox="0 0 400 400"
        >
          <path
            fill="#fff"
            stroke="none"
            d="M298.2 363.179A327.358 327.358 0 0114.7 199.5 327.358 327.358 0 01298.2 35.821a327.358 327.358 0 010 327.358z"
          ></path>
          <path d="M290 355.885A311.77 311.77 0 0120 200 311.77 311.77 0 01290 44.115a311.77 311.77 0 010 311.77z"></path>
        </SVG>
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
          <SVG
            fill="none"
            stroke="#2F3030"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            width={4}
            height={4}
            viewBox="0 0 400 400"
          >
            <path
              fill="#ED705C"
              stroke="none"
              d="M356.604 310.591a359.499 359.499 0 01-211.308 68.659A359.499 359.499 0 0114.7 199.5 359.499 359.499 0 01145.296 19.75 359.499 359.499 0 01356.604 88.41a359.499 359.499 0 010 222.182z"
            ></path>
            <path d="M345.623 305.801a342.38 342.38 0 01-201.246 65.39A342.38 342.38 0 0120 200 342.38 342.38 0 01144.377 28.81a342.38 342.38 0 01201.246 65.389 342.38 342.38 0 010 211.602z"></path>
          </SVG>
          <SVG
            fill="none"
            stroke="#2F3030"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            width={4}
            height={4}
            viewBox="0 0 400 400"
          >
            <path
              fill="#337EED"
              stroke="none"
              d="M367.683 285.704a295.533 295.533 0 01-128.227 102.257A295.533 295.533 0 0179.56 351.466 295.533 295.533 0 018.4 203.7 295.533 295.533 0 0179.56 55.934a295.533 295.533 0 01159.896-36.495 295.533 295.533 0 01128.227 102.257 295.533 295.533 0 010 164.008z"
            ></path>
            <path d="M362.174 278.1a281.46 281.46 0 01-122.12 97.387A281.46 281.46 0 0187.772 340.73 281.46 281.46 0 0120 200 281.46 281.46 0 0187.772 59.27a281.46 281.46 0 01152.282-34.757 281.46 281.46 0 01122.12 97.388 281.46 281.46 0 010 156.198z"></path>
          </SVG>
        </Flex>
      </div>
      <SrOnly as="figcaption">Reuleaux triangle, pentagon and hexagon.</SrOnly>
    </Flex>
  );
}

export default ReuleauxPolygons;
