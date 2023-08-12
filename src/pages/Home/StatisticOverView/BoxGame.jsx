import React, {useState} from 'react';
import BoxItemOverView from './BoxItemOverView';

import VerifiedUser from '@assets/svg/VerifiedUser'

const BoxGame = props => {
    const [data, setData] =  useState([
        {
            label: 'Tổng hóa đơn',
            currentValue: 620,
            color: '#D9534F',
            isUp: false,
            percent: 10
        },
        {
            label: 'Đã hủy',
            currentValue: 13,
            color: '#D9534F',
            isUp: false,
            percent: 10
        },
        {
            label: 'Doanh thu',
            currentValue: '145.5M',
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
                label: 'Trò chơi mạo hiểm',
                icon: <VerifiedUser fill="#12B76A" width={20} height={20}/>,
                color: '#D1FADF',
                colorShadow: 'rgba(44, 131, 176, 0.12)'
            }}
            filterValue= '' // todo
            data={data}
            onShowDetail={onShowDetail}
            onFilter={onFilter}
        />
    );
};

BoxGame.propTypes = {
    
};

export default BoxGame;