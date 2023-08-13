import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames'

const TabItem = ({
    it, 
    onChange, 
    defaultType
}) => {
    const {name, value, type} = it;
    const isActive = defaultType === type;
    return (
        <div 
            className={classNames(
                "flex gap-x-[6px] items-center pb-[8px] cursor-pointer",
                isActive && 'border-b-[2px] border-solid border-b-[#4F46E5]'
            )}
            onClick={() => {onChange(it)}}
        >
            <p className={classNames(
                'text-sm not-italic font-semibold leading-5',
                isActive ? 'text-[#4F46E5] ' : 'text-[#697586]'
            )}>{name}</p>
            <p className={classNames(
                'rounded-[13px] px-[6px] not-italic font-medium leading-4 text-[10px] flex items-center justify-center',
                isActive ? ' bg-[#EEF2FF] text-[#4F46E5]' : 'bg-[#E3E8EF] text-[#697586]'
            )}>
                {value}
            </p>
        </div>
    )
}

const Tab = ({
    data = [],
    onChange = () => {},
    defaultType = -1
}) => {
    return (
        <div className="flex gap-x-[24px] gap-y-[10px] items-center h-[28px] flex-wrap">
            {
                data && data.length > 0 && 
                data.map((it, index) => {
                    return (
                        <TabItem 
                            key={index}
                            onChange={onChange}
                            it={it}
                            defaultType={defaultType}
                        />
                    )
                })
            }
        </div>
    );
};

Tab.propTypes = {
    
};

export default Tab;