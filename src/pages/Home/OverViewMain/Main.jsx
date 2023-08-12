import React from 'react';
import Statistic from './Statistic';
import Table from './Table';

const Main = () => {
    return (
        <div
            className="p-[20px] flex gap-x-[20px] h-[574px]"
        >
            <Statistic></Statistic>
            <Table></Table>
        </div>
    );
};

export default Main;