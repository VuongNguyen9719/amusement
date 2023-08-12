import React from 'react';
import PropTypes from 'prop-types';

const IconSearch = ({fill = "#9AA4B2", width = 20, height = 20}) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${width}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M15 9.16675C15 12.3884 12.3883 15.0001 9.16669 15.0001C5.94503 15.0001 3.33335 12.3884 3.33335 9.16675C3.33335 5.94509 5.94503 3.33341 9.16669 3.33341C12.3883 3.33341 15 5.94509 15 9.16675ZM15.0266 13.8482C16.053 12.5651 16.6667 10.9376 16.6667 9.16675C16.6667 5.02461 13.3088 1.66675 9.16669 1.66675C5.02455 1.66675 1.66669 5.02461 1.66669 9.16675C1.66669 13.3089 5.02455 16.6667 9.16669 16.6667C10.9375 16.6667 12.565 16.053 13.8481 15.0267L16.0774 17.256C16.4029 17.5814 16.9305 17.5814 17.2559 17.256C17.5814 16.9306 17.5814 16.4029 17.2559 16.0775L15.0266 13.8482Z" fill={fill}/>
        </svg>

    );
};

IconSearch.propTypes = {
    
};

export default IconSearch;