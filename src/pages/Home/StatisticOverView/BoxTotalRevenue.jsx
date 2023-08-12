
import React, {useState} from 'react';
import BoxItemOverView from './BoxItemOverView';

import IconTotalRevenue from '@assets/svg/IconTotalRevenue';

const BoxTotalRevenue = props => {
    const [data, setData] =  useState([
        {
            label: 'Tổng doanh thu',
            currentValue: `1.255.640.000`,
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
            label: 'Tổng doanh thu',
            icon: <IconTotalRevenue/>,
            color: '#EEF2FF',
            colorShadow: 'rgba(220, 104, 3, 0.12)'
        }}
        filterValue= '' // todo
        data={data}
        onShowDetail={onShowDetail}
        onFilter={onFilter}
        />
    );
};

BoxTotalRevenue.propTypes = {
    
};

export default BoxTotalRevenue;