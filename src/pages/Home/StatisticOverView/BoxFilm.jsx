import React, { useState } from 'react';

import BoxItemOverView from './BoxItemOverView';
import IconFilm from '@assets/svg/IconFilm'

const BoxFilm = props => {
    const [data, setData] =  useState([
        {
            label: 'Tổng hóa đơn',
            currentValue: 860,
            color: '#2EA2C7',
            isUp: true,
            percent: 10
        },
        {
            label: 'Đã hủy',
            currentValue: 23,
            color: '#D9534F',
            isUp: false,
            percent: 10
        },
        {
            label: 'Doanh thu',
            currentValue: '320.5M',
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
                label: 'Rạp chiếu phim',
                icon: <IconFilm fill="#F04438"/>,
                color: '#FEF3F2',
                colorShadow: 'rgba(217, 45, 32, 0.12)'
            }}
            filterValue= '' // todo
            data={data}
            onShowDetail={onShowDetail}
            onFilter={onFilter}
        />
    );
};

BoxFilm.propTypes = {
    
};

export default BoxFilm;