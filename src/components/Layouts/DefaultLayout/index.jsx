import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import Headers from './Headers';

const DefaultLayout = ({ children }) => {
    return (
        <div
            className='w-full h-full flex bg-[#F8FAFC] overflow-hidden'
        >
            <Sidebar />
            <div className='flex-1'>
                <Headers />
                {children}
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {

};

export default DefaultLayout;