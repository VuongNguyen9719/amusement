import React from 'react';

import Scrollbar from '@formControls/Scrollbar'
import LogoInfo from './LogoInfo';
import Main from './Main';


const Sidebar = props => {
    return (
        <Scrollbar
            
        >
            <nav
                className='w-[290px] bg-[#fff] border-r border-solid border-r-[#F8FAFC] h-full '
            >
                <div
                    className='h-full p-[16px] flex flex-col gap-y-[36px]'
                >
                    <LogoInfo />
                    <div>
                        <Main />
                    </div>
                </div>
            </nav>
        </Scrollbar>
    );
};

Sidebar.propTypes = {

};

export default Sidebar;