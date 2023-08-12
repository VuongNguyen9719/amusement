import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import './index.css'

const SelectForm = props => {
    return (
        <Select 
            className="amusement-select-container"
            classNamePrefix="amusement-select"
            {...props}
        />    
    );
};

SelectForm.propTypes = {
    
};

export default SelectForm;