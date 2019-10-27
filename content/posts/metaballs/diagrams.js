import React from 'react';
import { Box, SVG } from '@ds';

function Tangents() {
  return (
    <SVG
      height={200}
      width="100%"
      mx="auto"
      bg="white"
      mb={4}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 1200"
    >
      <g fill="none" stroke="#333" strokeWidth="6">
        <circle cx="487.5" cy="600" r="96"></circle>
        <circle cx="712.5" cy="600" r="72"></circle>
      </g>
      <g strokeWidth="8">
        <g stroke="#5E2CA5">
          <path d="M497.74 695.452L720.18 671.589"></path>
          <path d="M497.74 504.548L720.18 528.411"></path>
          <path d="M0 0L0 0"></path>
          <path d="M0 0L0 0"></path>
        </g>
        <g fill="#fff" stroke="#FF41B4">
          <circle cx="497.74" cy="695.452" r="8"></circle>
          <circle cx="497.74" cy="504.548" r="8"></circle>
          <circle cx="720.18" cy="671.589" r="8"></circle>
          <circle cx="720.18" cy="528.411" r="8"></circle>
        </g>
      </g>
    </SVG>
  );
}

function Spread() {
  return (
    <SVG
      height={200}
      width="100%"
      mx="auto"
      bg="white"
      mb={4}
      fontFamily="code"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 1200"
    >
      <g fill="none" stroke="#333" strokeWidth="6">
        <circle cx="487.5" cy="600" r="96"></circle>
        <circle cx="712.5" cy="600" r="72"></circle>
      </g>
      <path fill="#fff" d="M495 585H615V615H495z"></path>
      <text x="500" y="605" fontSize="20">
        max-spread
      </text>
      <g strokeWidth="8">
        <g stroke="#5E2CA5" strokeLinecap="round">
          <path d="M497.74 695.452L720.18 671.589"></path>
          <path d="M497.74 504.548L720.18 528.411"></path>
          <path d="M487.5 600L497.74 695.452"></path>
          <path d="M487.5 600L497.74 504.548"></path>
        </g>
        <g fill="#fff" stroke="#FF41B4">
          <circle cx="497.74" cy="695.452" r="8"></circle>
          <circle cx="497.74" cy="504.548" r="8"></circle>
          <circle cx="720.18" cy="671.589" r="8"></circle>
          <circle cx="720.18" cy="528.411" r="8"></circle>
        </g>
      </g>
    </SVG>
  );
}

function Handles() {
  return (
    <SVG
      height={200}
      width="100%"
      mx="auto"
      bg="white"
      mb={4}
      fontFamily="code"
      fontWeight="bold"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 1200"
    >
      <g fill="#fff" stroke="#aaa" strokeWidth="6">
        <circle cx="487.5" cy="600" r="96"></circle>
        <circle cx="712.5" cy="600" r="64" stroke="none"></circle>
        <path d="M560.049 662.87c49.574-44.91 73.566-39.439 110.538-14.504a64 64 0 100-96.732c-36.972 24.935-60.964 30.406-110.538-14.504"></path>
      </g>
      <path
        fill="#fff"
        stroke="#aaa"
        strokeDasharray="5, 5"
        strokeWidth="4"
        d="M540 600a25 25 0 00-16.225-31.435L487.5 600z"
      ></path>
      <g strokeWidth="8">
        <g stroke="#5E2CA5">
          <path d="M560.049 537.13L609.623 582.04"></path>
          <path stroke="#A463F2" d="M560.049 537.13L487.5 600"></path>
          <path
            stroke="#aaa"
            strokeDasharray="5, 5"
            strokeWidth="4"
            d="M300 600L900 600"
          ></path>
        </g>
        <g fill="#fff" stroke="#FF41B4">
          <circle cx="487.5" cy="600" r="8" stroke="#FFA3D7"></circle>
          <circle cx="560.049" cy="537.13" r="8"></circle>
          <circle cx="609.623" cy="582.04" r="8"></circle>
        </g>
      </g>
      <g fontSize="40">
        <text x="450" y="615">
          A
        </text>
        <text x="575" y="530">
          B
        </text>
        <text x="625" y="600">
          C
        </text>
        <text x="500" y="620" fontSize="20">
          angle 1
        </text>
      </g>
    </SVG>
  );
}

function U1U2() {
  return (
    <Box height={200} mb={4} style={{ overflow: 'hidden' }}>
      <SVG
        height={200}
        width="100%"
        mx="auto"
        bg="white"
        fontFamily="code"
        fontWeight="bold"
        preserveAspectRatio="xMidYMid slice"
        transform="scale(1.5)"
        viewBox="0 0 1200 1200"
      >
        <g fill="none" stroke="#aaa" strokeWidth="4">
          <circle cx="487.5" cy="600" r="96"></circle>
          <circle cx="630" cy="600" r="64"></circle>
        </g>
        <g strokeWidth="4">
          <g stroke="#A463F2">
            <path d="M630 600L487.5 600"></path>
            <path d="M487.5 600L577 562"></path>
            <path d="M577 562L630 600"></path>
          </g>
          <g fill="#fff" stroke="#FF41B4">
            <circle cx="487.5" cy="600" r="4"></circle>
            <circle cx="630" cy="600" r="4"></circle>
            <circle cx="577" cy="562" r="4"></circle>
          </g>
        </g>
        <g fontSize="20">
          <text x="450" y="575">
            radius1
          </text>
          <text x="575" y="620">
            d
          </text>
          <text x="625" y="575">
            radius2
          </text>
          <text x="525" y="595" fontSize="15">
            u1
          </text>
          <text x="590" y="595" fontSize="15">
            u2
          </text>
        </g>
      </SVG>
    </Box>
  );
}

export default {
  Tangents,
  Spread,
  Handles,
  U1U2,
};
