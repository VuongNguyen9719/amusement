import React from 'react';
import PropTypes from 'prop-types';

import Scroll from '~formControls/Scrollbar';
import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div
            className='flex p-2 items-start max-w-[385px] w-[calc((100%/2)-10px)] gap-x-3 flex-none rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'
        >
            <div className='w-[90px] h-[90px] rounded overflow-hidden flex-none'>
                <img src={noImg} className='object-cover w-full h-full' />
            </div>
            <div className='flex flex-col items-start self-stretch gap-x-1'>
                <div className='self-stretch'>
                    <p className='text-[#4B5565] text-base not-italic font-medium leading-5 capitalize'>Vòng xoay mạo hiểm</p>
                </div>
                <p
                    className='overflow-hidden text-sm not-italic font-normal leading-5  mb-[4px]'
                    style={{
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '2',
                        display: '-webkit-box'
                    }}
                    data-tooltip-id="my-text" data-tooltip-content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus nisl sed hendrerit consectetur. Cras placerat sagittis quam, in tempus lorem mollis pellentesque"
                >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus nisl sed hendrerit consectetur. Cras placerat sagittis quam, in tempus lorem mollis pellentesque
                </p>
                <div className='flex items-start gap-x-1'>
                    <span className='text-[#9AA4B2] text-sm not-italic font-normal leading-5'>Độ tuổi:</span>
                    <span className='text-[#364152] text-sm not-italic font-medium leading-5'>18+</span>
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