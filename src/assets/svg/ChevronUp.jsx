import React from 'react';

function ChevronUp({width=12, height=12, fill = "#2EA2C7"}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path d="M10.25 8.25L6.5 3.75L2.75 8.25H10.25Z" fill={fill}/>
        </svg>
    );
}

export default ChevronUp;