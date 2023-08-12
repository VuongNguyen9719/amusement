import React from 'react';
import PropTypes from 'prop-types';

const ChevronDown = ({width=12, height=12, fill = "#2EA2C7"}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`}  fill="none">
  <path d="M10.25 3.75L6.5 8.25L2.75 3.75L10.25 3.75Z" fill={fill}/>
</svg>
    );
};

ChevronDown.propTypes = {
    
};

export default ChevronDown;