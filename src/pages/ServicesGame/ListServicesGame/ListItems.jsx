import React from 'react';
import PropTypes from 'prop-types';

import Scroll from '~formControls/Scrollbar';
import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div
            className='flex w-[calc((100%/3)-10px)] flex-1 gap-x-3 p-2 rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'
        >
            <div className='w-20 h-20 flex-none rounded overflow-hidden relative '>
                <img src={noImg} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col items-start self-stretch gap-y-1'>
                <p className='text-[#4B5565] text-base not-italic font-medium leading-5'>Kính trống gió</p>
                <div className='flex gap-x-1'>
                    <p className='text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Giá:</p>
                    <p className='text-[#364152] text-sm not-italic font-medium leading-5'>20.000 VND</p>
                </div>
            </div>
        </div>
    )
}

const ListItems = props => {
    return (
        <Scroll
            className="h-[calc(100%-60px)]"
        >
            <div
                className="flex justify-between items-start content-start self-stretch flex-wrap gap-[20px] "
            >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </Scroll>
    );
};

ListItems.propTypes = {

};

export default ListItems;