
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'

import Input from '~formControls/Input'
import IconAddPhoto from '~assets/svg/IconAddPhoto';
import Button from '~formControls/Button'
import classNames from 'classnames';

function DialogAddServices({
    onClose
}) {
    return (
        <div
            className='px-[20px] flex flex-col gap-y-[20px]'
        >
            <div
                className='flex flex-col gap-y-4  min-h-[510px]'
            >
                <div
                    className='flex gap-x-3'
                >
                    <div
                        className='flex-1 flex flex-col gap-y-[4px] '
                    >
                        <div className='flex gap-x-1'>
                            <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Tên dịch vụ</p>
                            <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                        </div>
                        <Input
                            className=""
                            placeholder="Nhập tên phim.."
                        />
                    </div>

                    <div
                        className='flex-1 flex flex-col gap-y-[4px] '
                    >
                        <div className='flex gap-x-1'>
                            <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giá dịch vụ</p>
                            <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                        </div>
                        <Input
                            className=""
                            placeholder="Nhập tên phim.."
                        />
                    </div>
                </div>
                <div className='flex gap-x-3'>
                    <div className='flex flex-col gap-y-1 cursor-pointer'>
                        <label className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Ảnh đại diện</label>
                        <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'>
                            <IconWrapper width={28}>
                                <SvgIcon icon={<IconAddPhoto />} />
                            </IconWrapper>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex gap-x-4 mb-5 justify-end'>
                <Button
                    onClick={onClose}
                    text="Huỷ"
                    className="flex items-center justify-center px-3 py-[10px] rounded-lg bg-[#F8FAFC] cursor-pointer text-[#697586] text-sm not-italic font-medium leading-5"
                />
                <Button
                    text="Thêm"
                    className={classNames(
                        "flex items-center w-[110px] justify-center px-3 py-[10px]  rounded-lg cursor-pointer text-sm not-italic font-medium leading-5 bg-[#4F46E5] text-[#FFF]",
                    )}
                />
            </div>

        </div>
    );
}

export default DialogAddServices;