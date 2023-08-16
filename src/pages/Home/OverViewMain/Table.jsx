import React from 'react';
import PropTypes from 'prop-types';

import Input from '~formControls/Input'
import Scrollbar from '~formControls/Scrollbar'
import IconSearch from '~assets/svg/IconSearch';

const Item = ({

}) => {
    return (
        <div className="flex items-center rounded-lg mb-[8px] bg-[#FCFCFD] h-[48px] py-[12px] hover:bg-[#EEF2FF] last:mb-[0px]">
            <p className="w-[25%] text-[#4B5565] text-sm not-italic font-normal leading-5">18:20:00 16/08/2022</p>
            <p className="w-[20%] text-[#4B5565] text-sm not-italic font-normal leading-5">35654981034</p>
            <p className="w-[30%] text-[#4B5565] text-sm not-italic font-normal leading-5">Nguyễn Hoàng kiểu Trinh</p>
            <p className="w-[10%] text-[#364152] text-sm not-italic font-normal leading-5">480.000</p>
            <p className="w-[15%] text-[#12B76A] text-end text-base not-italic font-medium leading-5">Thành công</p>
        </div>
    )
}

const Table = props => {
    return (
        <div
            className="flex flex-col gap-y-[20px] flex-1"
        >
            <div className="flex justify-between h-[40px] items-center">
                <p className="text-[#9AA4B2] text-base not-italic font-medium leading-5">Biến động hóa đơn</p>
                <Input 
                    icon={ <IconSearch />}
                    placeholder="Tìm kiếm theo số hóa đơn"
                />
            </div>
            <div className="flex flex-col gap-y-[12px] flex-1">
                <div className="flex">
                    <p className="w-[25%] text-[#697586] text-xs not-italic font-medium leading-4">Thời gian</p>
                    <p className="w-[20%] text-[#697586] text-xs not-italic font-medium leading-4">Số hóa đơn</p>
                    <p className="w-[30%] text-[#697586] text-xs not-italic font-medium leading-4">Tài khoản</p>
                    <p className="w-[10%] text-[#697586] text-xs not-italic font-medium leading-4">Thành tiền</p>
                    <p className="w-[15%] text-end text-[#697586] text-xs not-italic font-medium leading-4">Trạng thái</p>
                </div>
                <div className='h-[430px]'>
                    <Scrollbar
                        style={{
                            height: '100%'
                        }}
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
                    </Scrollbar>
                </div>
            </div>
        </div>
    );
};

Table.propTypes = {
    
};

export default Table;