import React from 'react';
import PropTypes from 'prop-types';
import ItemsChart from '../../ItemsChart'

const Index = props => {

    let dataFake = [
        {
            label: 'Vé công viên',
            isUp: true,
            value: 860,
            percent: 10
        },
        {
            label: 'Dịch vụ bổ trợ',
            isUp: false,
            value: 23,
            percent: 10
        },
        {
            label: 'Tổng',
            isUp: true,
            value: `320`,
            percent: 10
        },
    ]

    return (
        <div className="p-[20px] flex flex-col gap-y-[16px] h-[427px]">
            <ItemsChart 
                data={dataFake}
            />
            <div className="flex-1 flex items-center justify-center">
                chart here
            </div>
        </div>
    );
};

Index.propTypes = {
    
};

export default Index;