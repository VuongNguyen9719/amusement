import React from 'react';

import WrapperBox from '../WrapperBox'
import TotalBill from './TotalBill'
import TotalRevenue from './TotalRevenue'

const Index = () => {
    return (
        <section className="flex gap-x-[20px]">
        <WrapperBox
            title="tổng quan số lượng hóa đơn Trò chơi mạo hiểm"
        >

            <TotalBill />
        </WrapperBox>
        <WrapperBox
            title="tổng quan số lượng danh thu trò chơi mạo hiểm"
        >
        <TotalRevenue />
            
        </WrapperBox>
        </section>
    )
};

export default Index;