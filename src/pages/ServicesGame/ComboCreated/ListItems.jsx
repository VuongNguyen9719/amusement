import React from 'react';
import PropTypes from 'prop-types';

import Scroll from '~formControls/Scrollbar';
import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div
            className='flex flex-col w-[calc((100%/2)-10px)] flex-none gap-y-3 p-2 rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'
        >
            <div className='w-full h-[140px] flex-none rounded overflow-hidden relative '>
                <img src={noImg} className='object-cover w-full h-full' />
                <div className='absolute top-2 left-2 flex items-center justify-end px-2 py-[6px] rounded bg-[#222934B8]'>
                    <span className='text-[#FFF] text-base not-italic font-medium leading-4'>1</span>
                </div>
            </div>
            <div className='flex flex-col items-start self-stretch gap-y-2'>
                <p className='text-[#4B5565] self-stretch text-base not-italic font-medium leading-5'>Vé tất cả trò chơi</p>
                <div className='flex justify-between items-end self-stretch'>
                    <div className='flex-1'>
                        <p className='text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Giá vé:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='text-[#364152] text-sm not-italic font-medium leading-5 text-right'>300.000 VND</p>
                    </div>
                </div>
                <div className='flex justify-between items-end self-stretch'>
                    <div className='flex-1'>
                        <p className='text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Cuối tuần:</p>
                    </div>
                    <div className='flex-1'>
                        <p className='text-[#364152] text-sm not-italic font-medium leading-5 text-right'>350.000 VND</p>
                    </div>
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