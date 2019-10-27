import React from 'react';

/* eslint-disable */
function Drag() {
  return (
    <svg
      style={{
        width: '100%',
        margin: '0 auto',
        cursor: 'default',
        display: 'block',
        dominantBaseline: 'central',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        MsUserSelect: 'none',
        userSelect: 'none',
        minHeight: 219,
        backgroundColor: '#fff',
        padding: '8px 16px 8px 0',
      }}
      textAnchor="middle"
      viewBox="0 0 565 219"
    >
      <g fontFamily="monospace" fontSize="20" fontWeight="800" textAnchor="end">
        <text x="545" y="20" fill="#5E2CA5">
          drag$
        </text>
        <text x="545" y="72" fill="#D5008F">
          panStart$
        </text>
        <text x="545" y="124" fill="#D5008F">
          panMove$
        </text>
        <text x="545" y="176" fill="#D5008F">
          panEnd$
        </text>
      </g>
      <path
        stroke="#767676"
        strokeDasharray="3,3"
        d="M76.643 37L76.643 89"
      ></path>
      <path
        stroke="#767676"
        strokeDasharray="3,3"
        d="M92.129 37L92.129 141"
      ></path>
      <path
        stroke="#767676"
        strokeDasharray="3,3"
        d="M374.188 37L374.188 193"
      ></path>
      <g transform="translate(0 11) translate(21)">
        <path
          stroke="#000"
          strokeWidth="2"
          d="M0 26L534 26"
          shapeRendering="crispEdges"
        ></path>
        <path d="M534 21l10 5-10 5z"></path>
        <circle
          r="15"
          cx="0"
          cy="0"
          fill="#767676"
          transform="translate(55.643 26)"
        ></circle>
        <circle
          r="15"
          cx="0"
          cy="0"
          fill="#767676"
          transform="translate(71.129 26)"
        ></circle>
        <circle
          r="15"
          cx="0"
          cy="0"
          fill="#767676"
          transform="translate(353.188 26)"
        ></circle>
      </g>
      <g transform="translate(0 63) translate(21)">
        <path
          stroke="#767676"
          strokeWidth="2"
          d="M55.643 26L534 26"
          shapeRendering="crispEdges"
        ></path>
        <path fill="#767676" d="M534 21l10 5-10 5z"></path>
        <g transform="translate(55.75 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">⬇️</text>
        </g>
      </g>
      <g transform="translate(0 115) translate(21)">
        <path
          stroke="#767676"
          strokeWidth="2"
          d="M71.129 26L534 26"
          shapeRendering="crispEdges"
        ></path>
        <path fill="#767676" d="M534 21l10 5-10 5z"></path>
        <g transform="translate(71.45 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(104.984 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(138.84 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(172.589 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(206.444 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(240.3 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(274.049 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(307.904 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
        <g transform="translate(341.76 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">🔁</text>
        </g>
      </g>
      <g transform="translate(0 167) translate(21)">
        <path
          stroke="#767676"
          strokeWidth="2"
          d="M353.188 26L534 26"
          shapeRendering="crispEdges"
        ></path>
        <path fill="#767676" d="M534 21l10 5-10 5z"></path>
        <g transform="translate(353.294 26)">
          <circle r="15" fill="#fff" stroke="#767676" strokeWidth="2"></circle>
          <text fill="#767676">⬆️</text>
        </g>
      </g>
    </svg>
  );
}

export default Drag;
