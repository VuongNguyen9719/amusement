import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../../../common/formControls/Chart';

const Statistic = props => {

    return (
        <div
            className="w-[30%] max-w-[440px] px-[20px] py-[24px] flex flex-col gap-y-[80px] rounded-lg border border-solid border-[#EEF2FF] bg-[#FCFCFD]"
        >
            <div
                className="flex justify-center items-center flex-1"
            >
               {/* <Chart 
                    {...options}
               /> */}
               chart here
            </div>
            <div
                className="flex flex-col gap-y-[20px]"
            >
                <p className="text-base not-italic font-medium leading-5 text-[#4B5565] text-center">Chi tiết doanh số các khối dịch vụ</p>
                <div
                    className="flex flex-col gap-y-[12px]"
                >
                    <div
                        className="flex items-center"
                    >
                        <p className="w-[50%] text-sm not-italic font-normal text-start	leading-5 text-[#9AA4B2]">Tên khối dịch vụ</p>
                        <p className="w-[25%] text-sm not-italic font-normal text-center leading-5 text-[#9AA4B2]">Tỷ lệ</p>
                        <p className="w-[25%] text-sm not-italic font-normal text-end leading-5 text-[#9AA4B2]">Doanh thu</p>
                    </div>
                    <div
                        className="flex justify-center gap-y-[16px] flex-col"
                    >
                        <div className="flex items-center">
                            <div className="w-[50%] flex gap-x-[12px] items-center">
                                <div className='w-[12px] h-[12px] bg-[#3C89EF] rounded-full'></div>
                                <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Công viên nước</p>
                            </div>
                            <p className="w-[25%] text-center text-[#4B5565] text-sm not-italic font-semibold leading-4">62,37%</p>
                            <p className="w-[25%] text-end text-[#4B5565] text-sm not-italic font-semibold leading-4">680.530</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[50%] flex gap-x-[12px] items-center">
                                <div className='w-[12px] h-[12px] bg-[#F04438] rounded-full'></div>
                                <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Rạp chiếu phim</p>
                            </div>
                            <p className="w-[25%] text-center text-[#4B5565] text-sm not-italic font-semibold leading-4">62,37%</p>
                            <p className="w-[25%] text-end text-[#4B5565] text-sm not-italic font-semibold leading-4">680.530</p>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[50%] flex gap-x-[12px] items-center">
                                <div className='w-[12px] h-[12px] bg-[#12B76A] rounded-full'></div>
                                <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">Trò chơi mạo hiểm</p>
                            </div>
                            <p className="w-[25%] text-center text-[#4B5565] text-sm not-italic font-semibold leading-4">62,37%</p>
                            <p className="w-[25%] text-end text-[#4B5565] text-sm not-italic font-semibold leading-4">680.530</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Statistic.propTypes = {
    
};

export default Statistic;