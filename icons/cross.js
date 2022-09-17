import * as React from 'react';

const Cross = (props) => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M13 13L1 1"
            stroke="#30363D"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M13 1L1 13"
            stroke="#30363D"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default Cross;
