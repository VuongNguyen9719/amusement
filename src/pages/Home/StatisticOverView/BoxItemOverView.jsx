import React from 'react';
import { Fragment } from 'react';
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'

import ChevronDown from '~assets/svg/ChevronDown'
import ChevronUp from '~assets/svg/ChevronUp'

import Select from '~common/formControls/Select';
import classNames from 'classnames';

const BoxItemOverView = ({
    title={},
    filterValue="",
    data=[],
    onShowDetail= () => {},
    onFilter=() => {}
}) => {
    const IconTitle = title?.icon || <Fragment />
    return (
        <div
            className="width-box-statistic 2xl:w-[calc(25%-25px)] m-[5px] pb-[10px] bg-[#fff] shadow-[0_0_6px_0_rgba(0,0,0,0.12)] rounded-xl flex flex-col gap-y-[20px]"
        >
            <div
                className="py-[16px] px-[20px] flex justify-between	items-center border-b border-solid border-b-[#E3E8EF]"
            >
                <div
                    className="flex gap-x-[12px] items-center"
                >
                    <div
                        className={
                            `rounded-full	flex justify-center items-center w-[40px] h-[40px]`
                        }
                        style={{
                            backgroundColor: title?.color,
                            boxShadow: `0px 0px 8px 0px ${title?.colorShadow} inset`
                        }}
                    >
                            <IconWrapper >
                                <SvgIcon icon={IconTitle} />
                            </IconWrapper>
                    </div>
                    <p className="text-base not-italic font-medium leading-5 text-[#4B5565]">{title?.label || ''}</p>
                </div>
                <div>
                    <Select
                    styles={{
                        control: (baseStyles, state) => ({
                            borderRadius: '8px',
                            border: `1px solid #E3E8EF`,
                            background: `#FFF`,
                            display: 'flex',
                            color:'#4B5565',
                            // maxHeight: '28px',
                            // maxWidth: '94px'
                        }),
                      }}
                      placeholder="Tháng này"
                    />
                </div>
            </div>
            <div
                className={classNames(
                    "flex  px-[20px] gap-x-[18.5px]",
                    data && data.length > 1 ? ' justify-between' : 'justify-center'
                )}
            >
                {
                    data && data.length > 0 &&
                    data.map(({label, currentValue, color, isUp, percent}, index) => {
                        return (
                            <div
                                className="flex flex-col gap-y-[4px] items-center"
                                key={index}
                            >
                                <div className="flex items-center">
                                    <p className="text-2xl not-italic font-medium leading-10 text-[#4B5565]">{currentValue}</p>
                                    <IconWrapper width={12}>
                                        <SvgIcon icon={isUp ? <ChevronUp fill={color} /> : <ChevronDown fill={color} />} />
                                    </IconWrapper>
                                    <p className={`text-sm not-italic font-medium leading-5 text-[${color}]`}>{percent}%</p>
                                </div>
                                <p className="text-base not-italic font-medium leading-5 text-[#697586]">{label}</p>
                            </div>
                        )
                    })
                }
            </div>
            <p 
            className="px-[20px] text-center text-sm not-italic font-normal leading-5 text-[#9AA4B2] cursor-pointer hover:text-[#4F46E5]"
            onClick={onShowDetail}
            >Xem chi tiết</p>
        </div>
    );
};

BoxItemOverView.propTypes = {
    
};

export default BoxItemOverView;