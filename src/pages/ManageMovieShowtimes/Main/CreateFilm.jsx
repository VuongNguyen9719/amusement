import classNames from 'classnames';
import { useState } from 'react';
import IconDatePicker from '~assets/svg/IconDatePicker'

import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import Input from '~formControls/Input'
import Select from '~formControls/Select'
import Button from '~formControls/Button'
import IconAddPhoto from '~assets/svg/IconAddPhoto';
import IconAddVideo from '~assets/svg/IconAddVideo';
import IconClose from '~assets/svg/IconClose';
import { formatDateToDDMMYYYY } from '~common/utils/dateUtils';

const FormAddFilm = ({ onClose }) => {
    return (
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
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Tên phim tiếng Việt</p>
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
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Tên phim quốc tế</p>
                        <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập tên phim.."
                    />
                </div>
            </div>
            <div
                className='flex flex-col gap-y-[4px] '
            >
                <div className='flex gap-x-1'>
                    <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Mô tả phim</p>
                    <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                </div>
                <Input
                    className=""
                    placeholder="Nhập tên phim.."
                />
            </div>
            <div
                className='flex gap-x-3'
            >
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Thời lượng</p>
                        <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập thời lượng.."
                    />
                </div>

                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Thể loại</p>
                        <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập thể loại.."
                    />
                </div>
            </div>

            <div
                className='flex gap-x-3'
            >
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Khởi chiếu</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Ngày khởi chiếu.."
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Ngôn ngữ</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập ngôn ngữ.."
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Độ tuổi</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập độ tuổi.."
                    />
                </div>
            </div>

            <div
                className='flex gap-x-3'
            >
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Đạo diễn</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Ngày đạo diễn.."
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Diễn viên</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập diễn viên.."
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Quốc gia</p>
                    </div>
                    <Select
                        className=""
                        placeholder="Nhập quốc gia.."
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
                <div className='flex flex-col gap-y-1  cursor-pointer'>
                    <label className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Trailer phim</label>
                    <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'>
                        <IconWrapper width={28}>
                            <SvgIcon icon={<IconAddVideo />} />
                        </IconWrapper>
                    </div>
                </div>
            </div>
        </div>
    )
}

const FormShowtimes = () => {
    return (
        <div className='flex flex-col gap-y-4  min-h-[510px]'>
            <div
                className='flex flex-col gap-y-1 '
            >
                <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giờ đã có lịch</p>
                <div
                    className='flex gap-x-2 '
                >
                    <div className='p-[6px] flex items-center justify-center bg-[#FFF8E8] rounded '>
                        <span className='text-[#FDB022] text-xs not-italic font-medium leading-4'>08:00 - 10:00</span>
                    </div>
                    <div className='p-[6px] flex items-center justify-center bg-[#FFF8E8] rounded '>
                        <span className='text-[#FDB022] text-xs not-italic font-medium leading-4'>09:45 - 11:15</span>
                    </div>
                    <div className='p-[6px] flex items-center justify-center bg-[#FFF8E8] rounded '>
                        <span className='text-[#FDB022] text-xs not-italic font-medium leading-4'>11:30 - 13:15</span>
                    </div>
                </div>
            </div>
            <div
                className='flex gap-x-3 items-center'
            >
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giá vé</p>
                        <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập giá vé.."
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Cài giờ</p>
                        <span className='text-[#F97066] text-sm not-italic font-normal leading-5'>*</span>
                    </div>
                    <div className='flex gap-x-4 items-center'>

                        <Input
                            className=""
                            placeholder="Giờ bắt đầu.."
                        />
                        <span className='text-[#364152] text-sm not-italic font-normal leading-5'>-</span>
                        <Input
                            className=""
                            placeholder="Giờ kết thúc.."
                        />
                    </div>
                </div>

                <div
                    className='flex-none flex flex-col gap-y-[4px] self-end '
                >
                    <Button
                        className="flex self-end px-[16px] py-[10px] rounded-lg bg-[#EEF2FF] text-[#4F46E5] text-sm not-italic font-medium leading-5 cursor-pointer"
                        text="Thêm"
                    />
                </div>
            </div>
            <div
                className='flex flex-col gap-y-1'
            >
                <label className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giờ đã cài</label>
                <div className='flex gap-x-2'>
                    <div className='flex bg-[#EEF2FF] rounded'>
                        <div className='flex flex-col items-center justify-center px-[6px] py-1  '>
                            <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>08:00 - 10:00</p>
                            <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                        </div>
                        <div className='p-[2px] flex items-center justify-center cursor-pointer'>
                            <IconWrapper className="p-[2px] flex items-center justify-center cursor-pointer" width={16}>
                                <SvgIcon icon={<IconClose fill="#9AA4B2" />} />
                            </IconWrapper>
                        </div>
                    </div>
                    <div className='flex bg-[#EEF2FF] rounded'>
                        <div className='flex flex-col items-center justify-center px-[6px] py-1  '>
                            <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>08:00 - 10:00</p>
                            <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                        </div>
                        <div className='p-[2px] flex items-center justify-center cursor-pointer'>
                            <IconWrapper className="p-[2px] flex items-center justify-center cursor-pointer" width={16}>
                                <SvgIcon icon={<IconClose fill="#9AA4B2" />} />
                            </IconWrapper>
                        </div>
                    </div>
                    <div className='flex bg-[#EEF2FF] rounded'>
                        <div className='flex flex-col items-center justify-center px-[6px] py-1  '>
                            <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>08:00 - 10:00</p>
                            <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>90.000 đ</p>
                        </div>
                        <div className='p-[2px] flex items-center justify-center cursor-pointer'>
                            <IconWrapper className="p-[2px] flex items-center justify-center cursor-pointer" width={16}>
                                <SvgIcon icon={<IconClose fill="#9AA4B2" />} />
                            </IconWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CreateFilm({
    onClose,
    day
}) {
    const tabs = [
        { label: 'Thông tin phim', value: 0, component: FormAddFilm },
        { label: 'Cài lịch chiếu', value: 1, component: FormShowtimes },
    ]

    const [defaultTab, setDefaultTab] = useState(0)

    const CompActive = tabs[defaultTab]?.component;
    return (
        <div className="px-[20px] flex flex-col gap-y-[20px]">
            <div
                className="flex justify-between items-center"
            >
                <div className="w-[200px] px-[8px] py-[12px] flex items-center gap-x-2 rounded-lg border border-solid border-[#E3E8EF] ">
                    <p className="flex-1 text-[#4B5565] text-base not-italic font-normal leading-6">{formatDateToDDMMYYYY(new Date(day))}</p>
                    <IconDatePicker />
                </div>
                <div className='w-[400px] flex rounded-lg overflow-hidden border border-solid border-[#E3E8EF]'>
                    {
                        tabs.map(({ label, value }, index) => {
                            const isActive = value === defaultTab
                            return (
                                <div
                                    key={index}
                                    className={classNames(
                                        'flex-1 flex items-center justify-center gap-x-[10px]  px-[9px] py-[12px] cursor-pointer',
                                        (index != tabs.length - 1) && 'border-r border-solid border-r-[#E3E8EF]',
                                        isActive ? 'bg-[#F8FAFC]' : ''
                                    )}
                                    onClick={() => { setDefaultTab(value) }}
                                >
                                    <div
                                        className={classNames(
                                            'flex items-center justify-center rounded-[99px] w-[20px] h-[20px] px-[2px] py-[5px]',
                                            isActive ? "bg-[#4F46E5]" : 'bg-[#E3E8EF]'
                                        )}
                                    >
                                        <span
                                            className={classNames(
                                                'text-sm not-italic font-medium leading-4',
                                                isActive ? 'text-[#E5F0FD]' : 'text-[#CDD5DF] '
                                            )}
                                        >{index + 1}
                                        </span>
                                    </div>
                                    <p
                                        className={classNames(
                                            'text-base not-italic font-medium leading-5',
                                            isActive ? "text-[#4F46E5]" : "text-[#E3E8EF]"
                                        )}
                                    >{label}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {CompActive && <CompActive onClose={onClose} />}
            <div className='flex gap-x-4 mb-5 justify-end'>
                <Button
                    onClick={onClose}
                    text="Huỷ"
                    className="flex items-center justify-center px-[10px] py-4 rounded-lg bg-[#F8FAFC] cursor-pointer text-[#697586] text-sm not-italic font-medium leading-5"
                />
                <Button
                    text="Tiếp theo"
                    onClick={() => {
                        setDefaultTab(prev => {
                            if (prev + 1 <= tabs.length) {
                                prev += 1;
                            }
                            return prev
                        })
                    }}
                    className={classNames(
                        "flex items-center justify-center px-[10px] py-4 rounded-lg cursor-pointer text-sm not-italic font-medium leading-5",
                        defaultTab === tabs.length ? "bg-[#E3E8EF] text-[#CDD5DF]" : "bg-[#4F46E5] text-[#FFF]"
                    )}
                />
            </div>
        </div>
    );
}

export default CreateFilm;