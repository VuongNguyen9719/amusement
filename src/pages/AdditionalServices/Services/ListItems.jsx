import React from 'react';
import PropTypes from 'prop-types';

import Scroll from '~formControls/Scrollbar';
import noImg from '~assets/img/no-image.jpg'

const Item = () => {
    return (
        <div className="flex flex-1 gap-x-3 rounded max-w-[236px] p-2 border border-solid border-[#E3E8EF] bg-[#FCFCFD] shadow-[0_0_6px_0_rgba(0,0,0,0.12)]">
            <div
                className="w-[80px] h-[80px] rounded overfollow-hidden flex-none"
            >
                <img src={noImg} className="w-full h-full object-covert"/>
            </div>
            <div
                className="flex flex-col gap-y-[2] flex-1"
            >   
                <p className="text-[#4B5565] text-base not-italic font-medium leading-5">Snack O'star vị BBQ</p>
                <div className="flex gap-x-1">
                    <span className="text-[#9AA4B2] text-sm not-italic font-normal leading-5">Giá:</span>
                    <span className="text-[#364152] text-sm not-italic font-medium leading-5">20.000 VND</span>
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