import React, {useState} from 'react';

import BoxItemOverView from './BoxItemOverView';
import WaterPark from '@assets/svg/WaterPark'

const BoxWaterPark = props => {
    const [data, setData] =  useState([
        {
            label: 'Tổng hóa đơn',
            currentValue: 1240,
            color: '#D9534F',
            isUp: false,
            percent: 10
        },
        {
            label: 'Đã hủy',
            currentValue: 52,
            color: '#D9534F',
            isUp: false,
            percent: 10
        },
        {
            label: 'Doanh thu',
            currentValue: '680.5M',
            color: '#2EA2C7',
            isUp: true,
            percent: 10
        },
    ]);
    const onShowDetail = () => { // todo

    }
    const onFilter = () => { // todo

    }

    return (
        <BoxItemOverView
            title={{
                label: 'Công viên nước',
                icon: <WaterPark fill="#3C89EF"/>,
                color: '#ADCDF8',
                colorShadow: 'rgba(220, 104, 3, 0.12)'
            }}
            filterValue= '' // todo
            data={data}
            onShowDetail={onShowDetail}
            onFilter={onFilter}
        />
    );
};

BoxWaterPark.propTypes = {
    
};

export default BoxWaterPark;