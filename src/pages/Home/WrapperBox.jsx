import React from 'react';
import SelectForm from '@formControls/Select';
import IconDatePicker from '@assets/svg/IconDatePicker'

import IconWrapper from '@HOC/IconWrapper'
import SvgIcon from '@formControls/SvgIcon.jsx'

const Header = ({title = '', onChange = () => {}}) => {
    return (
        <div 
            className="h-[80px] p-[20px] flex justify-between items-center border-b border-solid border-b-[#E3E8EF]"
        >
            <p className="text-[#4B5565] text-sm not-italic font-medium leading-4 uppercase">{title}</p>
            <SelectForm 
                styles={{
                    control: (baseStyles, state) => ({
                        borderRadius: '8px',
                        border: `1px solid #E3E8EF`,
                        background: `#FFF`,
                        display: 'flex',
                        color:'#4B5565',
                        maxHeight: '40px',
                        minWidth: '200px'
                    }),
                  }}
                  placeholder={
                    <div className="flex gap-x-[12px] items-center">
                        <IconWrapper >
                            <SvgIcon icon={<IconDatePicker />} />
                        </IconWrapper>
                        <p className="text-[4B5565] text-sm not-italic font-normal leading-5">Tháng này</p>
                    </div>
                  }
            />
            
        </div>
    )
}

const WrapperBox = ({
    children,
    title = "",
    onFilter = () => {},
    defalutValueFilter = ''
}) => {
    return (
        <section
            className="flex flex-col m-[5px] rounded-lg	bg-[#FFF] shadow-[0_0_4px_0_rgba(51,51,51,0.12)]"
        >
            <Header title={title} onChange={onFilter}></Header>
            {children}
        </section>
    );
};

export default WrapperBox;