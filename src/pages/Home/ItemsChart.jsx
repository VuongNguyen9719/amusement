import React from 'react';
import PropTypes from 'prop-types';

import IconWrapper from '@HOC/IconWrapper'
import SvgIcon from '@formControls/SvgIcon.jsx'

import ChevronDown from '@assets/svg/ChevronDown'
import ChevronUp from '@assets/svg/ChevronUp'

const Item = ({label, value, percent, isUp}) => {
    const color = isUp ? '#2EA2C7' : '#D9534F'
    return (
        <div className="flex gap-x-[8px] items-center">
            <p className="text-[#9AA4B2] text-xs not-italic font-normal leading-4">{label}:</p>
            <div className='flex items-center'>
                <p className="text-[#364152] text-sm not-italic font-medium leading-5 mr-[4px]">{value}</p>
                <p>
                <IconWrapper width={12}>
                    <SvgIcon icon={isUp ? <ChevronUp width={12} height={12} fill={color}/> : <ChevronDown  width={12} height={12} fill={color}/>} />
                </IconWrapper>
                </p>
                <span className={`text-sm not-italic font-medium leading-5 text-[${color}]`}>{percent}%</span>
            </div>
        </div>
    )
}

const ItemsChart = (props) => {
    const {data} = props;
    return (
        <div className="flex gap-x-[20px] flex-wrap">
            {
            data && data.length > 0 && 
            data.map((it, index) => {
                return (
                    <Item 
                        key={index}
                        {...it}
                    />
                )
            })
            }
        </div>
    );
};

ItemsChart.propTypes = {
    
};

export default ItemsChart;