import React from 'react';
import PropTypes from 'prop-types';
import IconEdit from '~assets/svg/IconEdit';
import IconPreview from '~assets/svg/IconPreview';
import IconHidden from '~assets/svg/IconHidden';
import IconTrash from '~assets/svg/IconTrash';


import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import classNames from 'classnames';

const PopperEdit = ({
    onClose = () => {},
    ...res
}) => {

    const onEdit = () => {
        
    }

    const onPreview = () => {

    }

    const onHidden = () => {

    }

    const onDelete = () => {

    }

    const actions = [
        {name: 'Chỉnh sửa', icon: IconEdit, onClick: onEdit},
        {name: 'Xem chi tiết', icon: IconPreview, onClick: onPreview},
        {name: 'Ẩn dịch vụ', icon: IconHidden, onClick: onHidden},
    ]

    return (
        <div className="w-[224px]">
            {
                actions.map((action, index) => {
                    const {onClick, icon:Icon, name} = action;
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                onClose()
                                onClick()
                            }}
                            className={classNames(
                                "flex p-2 items-center gap-x-2 cursor-pointer",
                                index === actions.length - 1 && 'border-b border-solid border-[#E3E8EF] pd-[10px]'
                            )}
                            
                        >
                            <IconWrapper width={20}>
                                <SvgIcon icon={<Icon />} />
                            </IconWrapper>
                            <p className='text-[#697586] text-sm not-italic font-medium leading-5'>{name}</p>
                        </div>
                    )
                })
            }
            <div
                onClick={onDelete}
                className={classNames(
                    "flex p-2 items-center gap-x-2 cursor-pointer",
                )}
            >
                <IconWrapper width={20}>
                    <SvgIcon icon={<IconTrash />} />
                </IconWrapper>
                <p className='text-[#F97066] text-sm not-italic font-medium leading-5'>Xoá</p>
            </div>
        </div>
    );
};

PopperEdit.propTypes = {
    
};

export default PopperEdit;