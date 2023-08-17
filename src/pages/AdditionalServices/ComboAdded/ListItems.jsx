import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import Scroll from '~formControls/Scrollbar';
import noImg from '~assets/img/no-image.jpg';

import { showPopper } from '~reduxStore/Actions'
import PopperEdit from './PopperEdit';

const Item = () => {

    const dispatch = useDispatch();

    const onEdit = (e) => {
        dispatch(showPopper({ 
            element: e.target,
            component: PopperEdit
        }))
        e.preventDefault();
    }

    return (
        <div className="group flex max-w-[236px] min-w-[220px] p-2 flex-col gap-y-3 flex-1 rounded border border-solid border-[#E3E8EF] bg-[#FCFCFD]">
            <div
                className="w-full h-[138px] relative"
            >  
                <img src={noImg} className="w-full h-full object-cover" />
                <div className="absolute w-full top-2 px-2 flex justify-between">
                    <div className="px-2 py-[6px] flex items-center justify-center rounded bg-[#222934B8]">
                        <span className="text-white text-base not-italic font-medium leading-4">2</span>
                    </div>
                    <div 
                        className="flex justify-center items-center w-[28px] h-[28px] p-1 rounded bg-[#222934B8] cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity "
                        onClick={onEdit}
                    >
                        <div className="flex gap-x-[2px] items-center justify-center pointer-events-none	">
                            <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                            <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                            <span className="w-[4px] h-[4px] bg-white rounded-[50%] "></span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex flex-col gap-y-2"
            >
                <div
                    className="flex flex-col gap-y-1"
                >
                    <p className="text-[#4B5565] text-base not-italic font-medium leading-5">Combo Kids</p>
                    <div
                        className="flex gap-x-1"
                    >
                        <p className="text-[#9AA4B2] text-sm not-italic font-normal leading-5">Giá:</p>
                        <p className="text-[#364152] text-sm not-italic font-medium leading-5">100.000 VND</p>
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <div
                        className="flex items-center justify-center p-[6px] gap-x-1 rounded bg-[#EEF2FF]"
                    >
                        <p className="text-[#364152] text-xs not-italic font-medium leading-4">Nước S</p>
                        <div className="w-[16px] h-[16px] rounded-[99px] p-1 flex items-center justify-center bg-[#FFF]">
                            <span className="text-[#4F46E5] not-italic font-semibold text-[10px]">1</span>
                        </div>
                    </div>
                    
                    <div
                        className="flex items-center justify-center p-[6px] gap-x-1 rounded bg-[#EEF2FF]"
                    >
                        <p className="text-[#364152] text-xs not-italic font-medium leading-4">Nước S</p>
                        <div className="w-[16px] h-[16px] rounded-[99px] p-1 flex items-center justify-center bg-[#FFF]">
                            <span className="text-[#4F46E5] not-italic font-semibold text-[10px]">1</span>
                        </div>
                    </div>
                    
                    <div
                        className="flex items-center justify-center p-[6px] gap-x-1 rounded bg-[#EEF2FF]"
                    >
                        <p className="text-[#364152] text-xs not-italic font-medium leading-4">Nước S</p>
                        <div className="w-[16px] h-[16px] rounded-[99px] p-1 flex items-center justify-center bg-[#FFF]">
                            <span className="text-[#4F46E5] not-italic font-semibold text-[10px]">1</span>
                        </div>
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