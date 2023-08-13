import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from '@formControls/Tab'

const Index = props => {

    const [defaultValueTab, setDefaultValueTab] = useState(0)

    const onChange = ({type}) => {
        setDefaultValueTab(type)
    }

    return (
        <div>
            <Tab 
                data={[
                    {
                        name: 'Tat ca',
                        type: 0,
                        value: 12
                    },
                    {
                        name: 'Dang hoat dong',
                        type: 1,
                        value: 11
                    },
                    {
                        name: 'Da an',
                        type: 2,
                        value: 1
                    }
                ]}
                onChange={onChange}
                defaultType={defaultValueTab}
            />
        </div>
    );
};

Index.propTypes = {
    
};

export default Index;