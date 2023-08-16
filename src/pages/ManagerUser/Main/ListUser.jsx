
import { Tooltip } from 'react-tooltip'
import { useState } from 'react'

import Scrollbar from '~formControls/Scrollbar'
import Checkbox from '~formControls/Checkbox'
import IconActionMenu from '~assets/svg/IconActionMenu'
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import classNames from 'classnames'
import noImg from '~assets/img/no-image.jpg'

const Item = () => {

    const [color, setColor] = useState('#697586')

    const [visible, setVisible] = useState(false);
    return (
        <div
            className={classNames(
                'flex h-[56px] items-center bg-[#fff] hover:bg-[#EEF2FF] border-t border-solid border-t-[#E3E8EF] hover:outline-b hover:outline-b-[#EEF2FF]',

            )}
        >
            <Checkbox className="w-[40px] h-[40px] p-[12px]" />
            <div className='w-[40px] text-[#697586] text-sm not-italic font-normal leading-5'>1</div>
            <div className='w-[20%] h-full px-[8px] flex items-center'>
                <div className='px-[12px] py-[4px] flex items-center justify-center text-[#12B76A] rounded bg-[#F8FAFC] text-sm not-italic font-medium leading-5'>
                    Quản lý rạp chiếu
                </div>
            </div>
            <div className='w-[44px] h-full px-[8px] flex items-center py-[10px]'>
                <div className='w-[28px] h-[28px] rounded-[6px] border border-solid border-[#E3E8EF]'>
                    <img className='w-full h-full object-cover' src={noImg} />
                </div>
            </div>
            <div className='w-[20%] h-full px-[8px] flex items-center text-[#4B5565] text-sm not-italic font-medium leading-5'>
                Hoàng văn Sơn
            </div>
            <div className='w-[10%] h-full px-[8px] flex items-center text-[#4B5565] text-sm not-italic font-medium leading-5'>RCP11034</div>
            <div className='w-[10%] h-full px-[8px] flex items-center text-[#4B5565] text-sm not-italic font-medium leading-5'>Nhân viên</div>
            <div className='w-[10%] h-full px-[8px] flex items-center text-[#4B5565] text-sm not-italic font-medium leading-5'>0355366451</div>
            <div
                className='w-[10%] h-full px-[8px] flex items-center '
            >
                <p
                    className='text-[#4B5565] text-sm not-italic font-medium leading-5 overflow-hidden break-all line-clamp-1'
                    style={{
                        WebkitBoxOrient: 'vertical',
                        display: '-webkit-box'
                    }}
                    data-tooltip-id="my-email"
                    data-tooltip-content="Hoangson@gmail.com"

                >
                    Hoangson@gmail.com
                </p>

                <Tooltip id="my-email" />
            </div>
            <div className='w-[10%] h-full px-[8px] flex items-center text-[#4B5565] text-sm not-italic font-medium leading-5'>07:00 - 15:30</div>
            <div className='w-[48px] p-[8px] flex items-center justify-center'>
                <IconWrapper
                    width={20}
                    className="hover:outline hover:outline-solid hover:outline-[#E3E8EF] hover:bg-[#E3E8EF] hover:shadow-[0_0_2px_0_rgba(0,0,0,0.16)] rounded  cursor-pointer"
                    onMouseEnter={() => { setColor('#6366F1') }}
                    onMouseLeave={() => { setColor('#697586') }}
                >
                    <SvgIcon icon={<IconActionMenu fill={color} />} />
                </IconWrapper>

            </div>
        </div>
    )
}

function ListUser() {
    return (
        <div className='h-[calc(100%-28px)]  border border-solid border-[#E3E8EF] rounded-[6px] overflow-hidden'>
            <div
                className='flex h-[40px] items-center bg-[#F8FAFC] border-none outline-none'
            >
                <Checkbox className="w-[40px] h-full p-[12px]" />
                <div className='w-[40px]'></div>
                <div className='w-[20%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Khối làm việc</div>
                <div className='w-[44px] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>AVT</div>
                <div className='w-[20%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Tên nhân sự</div>
                <div className='w-[10%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Mã nhân sự</div>
                <div className='w-[10%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Chức vụ</div>
                <div className='w-[10%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Số điện thoại</div>
                <div className='w-[10%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Email</div>
                <div className='w-[10%] h-full px-[8px] flex items-center text-[#697586] text-sm not-italic font-medium leading-5'>Lịch làm việc</div>
                <div className='w-[48px]'></div>
            </div>
            <Scrollbar
                className="h-[calc(100%-40px)]"
            >
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Scrollbar>
        </div>
    );
}

export default ListUser;