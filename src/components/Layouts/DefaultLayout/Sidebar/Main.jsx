import React, { useState } from 'react';
import enumGroupSidebar from '~common/constants/enumGroupSidebar';

import Item from './Item';
import MultiItem from './MultiItem';
import groupItem from '~common/constants/groupItem';



const Main = () => {
    return (
        <div className='flex flex-col gap-y-[28px]'>
            {
                groupItem.map((grItem, index) => {
                    const { type, ...res } = grItem;
                    if (type == enumGroupSidebar.Single) {
                        return (
                            <Item {...res} key={index} />
                        )
                    }
                    return (
                        <MultiItem
                            key={index}
                            {...res}
                        />
                    )
                })
            }
        </div>
    );
};

export default Main;