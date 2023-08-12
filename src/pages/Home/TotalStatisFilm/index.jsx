import React from 'react';

import WrapperBox from '../WrapperBox'
import TotalBill from './TotalBill'
import TotalRevenue from './TotalRevenue'

const Index = () => {
    return (
        <section className="flex gap-x-[20px]">
        <WrapperBox
            title="tổng quan số lượng hóa đơn rạp chiếu phim"
        >
            <TotalBill />
        </WrapperBox>
        <WrapperBox
            title="tổng quan số lượng danh thu rạp chiếu phim"
        >
        <TotalRevenue />
        </WrapperBox>
        </section>
    )
};

export default Index;