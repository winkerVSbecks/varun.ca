import React from 'react';
import { Image, SVG } from '@ds';

function CartsCoords() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      py={3}
      px={4}
      mx="auto"
      width="60%"
      backgroundColor="white"
      viewBox="0 0 228 228"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M227.118 199.307H.346"
        ></path>
        <path
          fill="#BFBFBF"
          d="M221.449 196.472l5.772 2.607a.25.25 0 010 .456l-5.772 2.607 2.834-2.835"
        ></path>
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.693.882v226.772"
        ></path>
        <path
          fill="#BFBFBF"
          d="M25.858 6.551L28.465.779a.25.25 0 01.456 0l2.607 5.772-2.835-2.834"
        ></path>
        <path
          stroke="#0F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M126.888 199.307v-56.693m-98.195 0h98.195"
        ></path>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M126.888 142.614l-98.195 56.693"
        ></path>
        <path
          fill="#000"
          d="M128.277 142.6a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-98.16 56.7a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -55)"
        >
          <tspan x="139.228" y="195.173">
            (x, y)
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="8"
          transform="translate(0 -55)"
        >
          <tspan x="124.574" y="264.606">
            x
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="8"
          transform="translate(0 -55)"
        >
          <tspan x="17.868" y="199.391">
            y
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="10"
          transform="translate(0 -55)"
        >
          <tspan x="131.518" y="196.253">
            P
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="10"
          transform="translate(0 -55)"
        >
          <tspan x="19.892" y="263.269">
            O
          </tspan>
        </text>
      </g>
    </SVG>
  );
}

function PolarCoords() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      py={3}
      px={4}
      width="70%"
      mx="auto"
      backgroundColor="white"
      viewBox="0 0 228 228"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M227.118 114.268H.346"
        ></path>
        <path
          fill="#BFBFBF"
          d="M221.449 111.433l5.772 2.607a.25.25 0 010 .456l-5.772 2.606 2.834-2.834"
        ></path>
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M113.732.882v226.772"
        ></path>
        <path
          fill="#BFBFBF"
          d="M110.898 6.551l2.606-5.772a.25.25 0 01.456 0l2.607 5.772-2.835-2.834"
        ></path>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M170.413 114.22c0-31.294-25.399-56.693-56.693-56.693-31.294 0-56.693 25.399-56.693 56.693 0 31.294 25.399 56.693 56.693 56.693 31.294 0 56.693-25.399 56.693-56.693"
        ></path>
        <path
          stroke="#0F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M162.831 114.268V85.921m-49.099 0h49.099"
        ></path>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M162.831 85.921l-49.099 28.347"
        ></path>
        <path
          fill="#000"
          d="M164.277 85.9a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-49.14 28.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -55)"
        >
          <tspan x="131.655" y="165.773">
            θ = 30°
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -55)"
        >
          <tspan x="122.07" y="149.942">
            r = 2
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="8"
          transform="translate(0 -55)"
        >
          <tspan x="160.549" y="179.588">
            x
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="8"
          transform="translate(0 -55)"
        >
          <tspan x="102.947" y="142.732">
            y
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="10"
          transform="translate(0 -55)"
        >
          <tspan x="167.433" y="139.534">
            P
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="10"
          transform="translate(0 -55)"
        >
          <tspan x="104.911" y="178.19">
            O
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M127.906 114.268c0-2.488-.655-4.932-1.899-7.087"
        ></path>
      </g>
    </SVG>
  );
}

function PolarPatterns() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      py={3}
      px={4}
      backgroundColor="white"
      width="60%"
      mx="auto"
      viewBox="0 0 198 192"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#0F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M105.867 95.28c0-3.912-3.175-7.087-7.087-7.087s-7.087 3.175-7.087 7.087 3.175 7.087 7.087 7.087 7.087-3.175 7.087-7.087m7.026 0c0-7.824-6.349-14.173-14.173-14.173S84.547 87.456 84.547 95.28s6.349 14.173 14.173 14.173 14.173-6.349 14.173-14.173m7.087 0c0-11.735-9.525-21.26-21.26-21.26-11.735 0-21.26 9.525-21.26 21.26 0 11.735 9.525 21.26 21.26 21.26 11.735 0 21.26-9.525 21.26-21.26m7.086 0c0-15.647-12.699-28.346-28.346-28.346S70.374 79.633 70.374 95.28s12.699 28.346 28.346 28.346 28.346-12.699 28.346-28.346m7.087 0c0-19.559-15.874-35.433-35.433-35.433-19.559 0-35.433 15.874-35.433 35.433 0 19.559 15.874 35.433 35.433 35.433 19.559 0 35.433-15.874 35.433-35.433m7.087 0c0-23.471-19.049-42.52-42.52-42.52-23.471 0-42.52 19.049-42.52 42.52 0 23.471 19.049 42.52 42.52 42.52 23.471 0 42.52-19.049 42.52-42.52m7.086 0c0-27.383-22.223-49.606-49.606-49.606-27.383 0-49.606 22.223-49.606 49.606 0 27.383 22.223 49.606 49.606 49.606 27.383 0 49.606-22.223 49.606-49.606m7.087-.06c0-31.294-25.399-56.693-56.693-56.693-31.294 0-56.693 25.399-56.693 56.693 0 31.294 25.399 56.693 56.693 56.693 31.294 0 56.693-25.399 56.693-56.693"
        ></path>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M183.772 95.268h-85.04"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="187.153" y="100.212">
            360°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M172.379 52.748l-73.647 42.52"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="176.455" y="53.394">
            30°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M141.252 21.621l-42.52 73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="142.196" y="19.195">
            60°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M98.732 10.228v85.04"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="95.438" y="7">
            90°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M56.213 21.621l42.519 73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="46.881" y="19.195">
            120°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M25.085 52.748l73.647 42.52"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="12.621" y="53.394">
            150°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M13.693 95.268h85.039"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="0.064" y="100.212">
            180°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M25.085 137.787l73.647-42.519"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="12.621" y="146.969">
            210°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M56.213 168.915l42.519-73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="46.881" y="181.229">
            240°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M98.732 180.307V95.268"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="93.638" y="193.726">
            270°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M141.252 168.915l-42.52-73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="140.396" y="181.229">
            300°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M172.379 137.787L98.732 95.268"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="174.655" y="146.969">
            330°
          </tspan>
        </text>
        <path
          fill="#000"
          d="M156.837 95.28a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-7.56-28.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-20.76-20.7a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-28.38-7.62a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-28.32 7.62a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-20.76 20.7a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-7.62 28.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m7.62 28.32a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m20.76 20.76a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m28.32 7.62a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m28.38-7.62a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m20.76-20.76a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-1.2-41.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-12.84-22.26a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-22.26-12.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-25.68 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-22.26 12.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-12.84 22.26a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m0 25.68a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m12.84 22.2a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m22.26 12.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m25.68 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m22.26-12.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m12.84-22.2a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-11.1-34.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-15.54-15.6a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-21.3-5.7a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-21.24 5.7a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-15.54 15.6a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-5.76 21.24a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.76 21.24a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m15.54 15.6a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m21.24 5.64a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m21.3-5.64a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m15.54-15.6a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.7-21.24a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-17.46-25.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-15.9-9.18a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-18.36 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-15.84 9.18a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-9.18 15.9a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m0 18.36a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m9.18 15.9a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m15.84 9.12a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m18.36 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m15.9-9.12a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m9.18-15.9a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m0-18.36a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-20.04-15.36a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-14.22-3.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-14.16 3.84a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-10.38 10.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-3.78 14.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m3.78 14.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m10.38 10.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m14.16 3.78a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m14.22-3.78a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m10.32-10.38a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m3.84-14.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-3.84-14.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-19.02-6.36a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-10.98 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-9.54 5.46a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-5.52 9.54a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m0 11.04a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.52 9.48a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m9.54 5.52a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m10.98 0a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m9.54-5.52a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.52-9.48a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m0-11.04a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-5.52-9.54a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-15.06.9a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-7.08 1.86a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-5.16 5.22a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-1.92 7.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m1.92 7.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.16 5.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m7.08 1.92a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m7.08-1.92a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m5.22-5.16a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m1.92-7.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-1.92-7.08a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-5.22-5.22a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002"
        ></path>
      </g>
    </SVG>
  );
}

const PatternExamples = () => (
  <>
    <Image
      width="8rem"
      height="6rem"
      mx={1}
      mt={1}
      mb={1}
      src="//cdn.dribbble.com/users/583436/screenshots/1735131/bubbles2.gif"
    />
    <Image
      width="8rem"
      height="6rem"
      mx={1}
      mt={1}
      mb={1}
      src="//cdn.dribbble.com/users/583436/screenshots/1702158/spiraldots.gif"
    />
    <Image
      width="8rem"
      height="6rem"
      mx={1}
      mt={1}
      mb={1}
      src="//cdn.dribbble.com/users/583436/screenshots/1660784/spins.gif"
    />
    <Image
      width="8rem"
      height="6rem"
      mx={1}
      mt={1}
      mb={1}
      src="//cdn.dribbble.com/users/583436/screenshots/1570346/spiralbig.gif"
    />
  </>
);

function PolarPolygon() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      py={3}
      px={4}
      backgroundColor="white"
      width="60%"
      mx="auto"
      viewBox="0 0 198 192"
    >
      <defs>
        <path
          id="a"
          d="M76.889 90.401H18.575L.555 34.938 47.732.661l47.177 34.277z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#0F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M105.867 95.28c0-3.912-3.175-7.087-7.087-7.087s-7.087 3.175-7.087 7.087 3.175 7.087 7.087 7.087 7.087-3.175 7.087-7.087m7.026 0c0-7.824-6.349-14.173-14.173-14.173S84.547 87.456 84.547 95.28s6.349 14.173 14.173 14.173 14.173-6.349 14.173-14.173m7.087 0c0-11.735-9.525-21.26-21.26-21.26-11.735 0-21.26 9.525-21.26 21.26 0 11.735 9.525 21.26 21.26 21.26 11.735 0 21.26-9.525 21.26-21.26m7.086 0c0-15.647-12.699-28.346-28.346-28.346S70.374 79.633 70.374 95.28s12.699 28.346 28.346 28.346 28.346-12.699 28.346-28.346m7.087 0c0-19.559-15.874-35.433-35.433-35.433-19.559 0-35.433 15.874-35.433 35.433 0 19.559 15.874 35.433 35.433 35.433 19.559 0 35.433-15.874 35.433-35.433m7.087 0c0-23.471-19.049-42.52-42.52-42.52-23.471 0-42.52 19.049-42.52 42.52 0 23.471 19.049 42.52 42.52 42.52 23.471 0 42.52-19.049 42.52-42.52m7.086 0c0-27.383-22.223-49.606-49.606-49.606-27.383 0-49.606 22.223-49.606 49.606 0 27.383 22.223 49.606 49.606 49.606 27.383 0 49.606-22.223 49.606-49.606m7.087-.06c0-31.294-25.399-56.693-56.693-56.693-31.294 0-56.693 25.399-56.693 56.693 0 31.294 25.399 56.693 56.693 56.693 31.294 0 56.693-25.399 56.693-56.693"
        ></path>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M183.772 95.268h-85.04"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="187.153" y="100.212">
            360°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M172.379 52.748l-73.647 42.52"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="176.455" y="53.394">
            30°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M141.252 21.621l-42.52 73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="142.196" y="19.195">
            60°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M98.732 10.228v85.04"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="95.438" y="7">
            90°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M56.213 21.621l42.519 73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="46.881" y="19.195">
            120°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M25.085 52.748l73.647 42.52"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="12.621" y="53.394">
            150°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M13.693 95.268h85.039"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="0.064" y="100.212">
            180°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M25.085 137.787l73.647-42.519"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="12.621" y="146.969">
            210°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M56.213 168.915l42.519-73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="46.881" y="181.229">
            240°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M98.732 180.307V95.268"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="93.638" y="193.726">
            270°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M141.252 168.915l-42.52-73.647"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="140.396" y="181.229">
            300°
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.499"
          d="M172.379 137.787L98.732 95.268"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="6"
          transform="translate(0 -3)"
        >
          <tspan x="174.655" y="146.969">
            330°
          </tspan>
        </text>
        <g transform="translate(51 45)">
          <use xlinkHref="#a" fill="#fff" stroke="#333" />
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <path
            stroke="#333"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.499"
            d="M76.889 90.401H18.575L.555 34.938 47.732.661l47.177 34.277-18.02 55.463zm-312.621-40.133L47.732-233.196-235.732 50.268zm3.006 3.006L50.738-230.19-232.726 53.274zm3.007 3.007L53.745-227.183-229.719 56.281zm3.007 3.007L56.751-224.176-226.712 59.288zm3.006 3.006L59.758-221.17-223.706 62.294zm3.007 3.007L62.765-218.163-220.699 65.301zm3.006 3.006L65.771-215.157-217.693 68.307zm3.007 3.007L68.778-212.15-214.686 71.314zm3.006 3.006L71.784-209.143-211.68 74.32zm3.007 3.007L74.791-206.137-208.673 77.327zm3.007 3.007L77.798-203.13-205.666 80.334zm3.006 3.006L80.804-200.124-202.66 83.34zm3.007 3.007L83.811-197.117-199.653 86.347zm3.006 3.006L86.817-194.11-196.647 89.353zm3.007 3.007L89.824-191.104-193.64 92.36zm3.007 3.007L92.83-188.097-190.633 95.367zm3.006 3.006L95.837-185.091-187.627 98.373zm3.007 3.007L98.844-182.084-184.62 101.38zm3.006 3.006L101.85-179.077l-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464L-175.6 110.4zm3.006 3.006L110.87-170.058l-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007L119.89-161.038l-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007L128.91-152.018l-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007l283.463-283.464-283.463 283.464zm3.006 3.006l283.464-283.464-283.464 283.464zm3.007 3.007l283.464-283.464-283.464 283.464zm3.006 3.006l283.464-283.463-283.464 283.463zm3.007 3.007l283.464-283.464-283.464 283.464zm3.007 3.007L183.028-97.899l-283.463 283.464zm3.006 3.006L186.035-94.893-97.429 188.571zm3.007 3.007L189.042-91.886-94.422 191.578zm3.006 3.006L192.048-88.879-91.416 194.584zm3.007 3.007L195.055-85.873-88.409 197.591zm3.007 3.007L198.061-82.866-85.402 200.598zm3.006 3.006L201.068-79.86-82.396 203.604zm3.007 3.007L204.075-76.853-79.389 206.611zm3.006 3.006L207.081-73.846-76.383 209.617zm3.007 3.007L210.088-70.84-73.376 212.624zm3.007 3.007L213.094-67.833-70.369 215.631zm3.006 3.006L216.101-64.827-67.363 218.637zm3.007 3.007L219.108-61.82-64.356 221.644zm3.006 3.006L222.114-58.814-61.35 224.65zm3.007 3.007L225.121-55.807-58.343 227.657zm3.006 3.006L228.127-52.8-55.337 230.663zm3.007 3.007L231.134-49.794-52.33 233.67zm3.007 3.007L234.141-46.787-49.323 236.677zm3.006 3.006L237.147-43.781-46.317 239.683zm3.007 3.007L240.154-40.774-43.31 242.69zm3.006 3.006L243.16-37.767-40.304 245.696zm3.007 3.007L246.167-34.761-37.297 248.703zm3.007 3.007L249.173-31.754-34.29 251.71zm3.006 3.006L252.18-28.748-31.284 254.716zm3.007 3.007L255.187-25.741-28.277 257.723zm3.006 3.006L258.193-22.734-25.271 260.729zm3.007 3.007L261.2-19.728-22.264 263.736zm3.007 3.007L264.206-16.721-19.257 266.743zm3.006 3.006L267.213-13.715-16.251 269.749zm3.007 3.007L270.219-10.708-13.244 272.756zm3.006 3.006L273.226-7.702-10.238 275.762zm3.007 3.007L276.233-4.695-7.231 278.769zm3.006 3.006L279.239-1.688-4.225 281.775zm3.007 3.007L282.246 1.318-1.218 284.782zm3.007 3.007L285.253 4.325 1.789 287.789zm3.006 3.006L288.259 7.331 4.795 290.795zm3.007 3.007L291.266 10.338 7.802 293.802zm3.006 3.006L294.272 13.345 10.808 296.808zm3.007 3.007L297.279 16.351 13.815 299.815zm3.007 3.007L300.285 19.358 16.822 302.822zm3.006 3.006L303.292 22.364 19.828 305.828zm3.007 3.007L306.299 25.371 22.835 308.835zm3.006 3.006L309.305 28.378 25.841 311.841zm3.007 3.007L312.312 31.384 28.848 314.848zm3.007 3.007L315.318 34.391 31.855 317.855zm3.006 3.006L318.325 37.397 34.861 320.861zm3.007 3.007L321.332 40.404 37.868 323.868zm3.006 3.006L324.338 43.41 40.874 326.874zm3.007 3.007L327.345 46.417 43.881 329.881zm3.006 3.006L330.351 49.424 46.887 332.887z"
            mask="url(#b)"
          ></path>
        </g>
      </g>
    </SVG>
  );
}

function RelativePolarCoords() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      display="block"
      py={3}
      px={4}
      backgroundColor="white"
      width="90%"
      mx="auto"
      viewBox="0 0 511 370"
    >
      <g fill="none" fillRule="evenodd">
        <path
          stroke="#0F0"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M274.182 341.307V199.575m-245.489 0h245.489"
        ></path>
        <path
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M510.583 341.307H.346"
        ></path>
        <path
          fill="#404040"
          d="M504.913 338.472l5.773 2.607a.25.25 0 010 .456l-5.773 2.607 2.835-2.835"
        ></path>
        <path
          stroke="#404040"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M28.693 1.15v368.504"
        ></path>
        <path
          fill="#404040"
          d="M25.858 6.819l2.607-5.772a.25.25 0 01.456 0l2.607 5.772-2.835-2.835"
        ></path>
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M510.583 199.575H274.182"
        ></path>
        <path
          stroke="#BFBFBF"
          strokeDasharray="8.504 5.669"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M359.259 199.58c0-46.942-38.097-85.039-85.039-85.039s-85.039 38.097-85.039 85.039 38.097 85.039 85.039 85.039 85.039-38.097 85.039-85.039"
        ></path>
        <path
          stroke="#BFBFBF"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M274.182 199.575L28.693 341.307"
        ></path>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M316.701 125.928l-42.519 73.647"
        ></path>
        <path
          fill="#000"
          d="M30.117 341.3a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m245.46-141.72a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m42.54-73.62a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002m-42.54 215.34a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002M30.117 199.58a1.418 1.418 0 10-2.836.002 1.418 1.418 0 002.836-.002"
        ></path>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="291.043" y="246.104">
            60 deg
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="249.432" y="214.813">
            r = 3
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="267.162" y="406.567">
            cx
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="13.167" y="256.333">
            cy
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="317.728" y="176.036">
            P
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="19.265" y="404.93">
            O
          </tspan>
        </text>
        <text
          fill="#000"
          fontFamily="CourierCE, Courier"
          fontSize="12"
          transform="translate(0 -55)"
        >
          <tspan x="277" y="266">
            C
          </tspan>
        </text>
        <path
          stroke="#F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M288.355 199.575c0-5.064-2.701-9.743-7.087-12.275"
        ></path>
      </g>
    </SVG>
  );
}

export default {
  CartsCoords,
  PolarCoords,
  PolarPatterns,
  PolarPolygon,
  RelativePolarCoords,
  PatternExamples,
};
