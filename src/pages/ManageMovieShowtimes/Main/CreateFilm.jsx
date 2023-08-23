import classNames from 'classnames';
import { useEffect, useState } from 'react';
import IconDatePicker from '~assets/svg/IconDatePicker'
import { format } from 'date-fns';
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import Input from '~formControls/Input'
import Select from '~formControls/Select'
import Button from '~formControls/Button'
import IconAddPhoto from '~assets/svg/IconAddPhoto';
import IconAddVideo from '~assets/svg/IconAddVideo';
import IconClose from '~assets/svg/IconClose';
import { formatDateToDDMMYYYY } from '~common/utils/dateUtils';
import managerFilm from '../../../api/manager-film';
import { toast } from 'react-toastify';
import helper from '~helper'

const FormAddFilm = ({ onClose, callbackData, data }) => {
    const [field, setField] = useState({
        name: '',
        original_name: '',
        description: '',
        duration: '',
        genre: '',
        premiereSchedule: '',
        classify: '',
        actors: '',
        directors: '',
        formatMovie: '',
        nation: '',
        avatar: '',
        trailer: '',
        ...data
    })

    const listFieldRequired = ['name', 'original_name', 'description', 'duration', 'genre']

    useEffect(() => {
        let countFieldPass = 0;
        listFieldRequired.forEach((fieldValid) => {
            if (typeof field[fieldValid] != 'undefined' && field[fieldValid] && field[fieldValid].length > 0) {
                countFieldPass += 1;
            }
        })

        if (countFieldPass === listFieldRequired.length) {
            callbackData({
                field,
                step: 0,
                isValid: true
            })
        } else {
            callbackData({
                field,
                step: 0,
                isValid: false
            })
        }

    }, [field])

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
                        value={field.name}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                name: value
                            }))
                        }}
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
                        value={field.original_name}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                original_name: value
                            }))
                        }}
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
                    value={field.description}
                    onChange={(value) => {
                        setField(prev => ({
                            ...prev,
                            description: value
                        }))
                    }}
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
                        value={field.duration}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                duration: value
                            }))
                        }}
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
                        value={field.genre}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                genre: value
                            }))
                        }}
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
                        value={field.premiereSchedule}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                premiereSchedule: value
                            }))
                        }}
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Định dạng</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập định dạng.."
                        value={field.formatMovie}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                formatMovie: value
                            }))
                        }}
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
                        value={field.classify}
                        type="number"
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                classify: value
                            }))
                        }}
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
                        value={field.directors}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                directors: value
                            }))
                        }}
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
                        value={field.actors}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                actors: value
                            }))
                        }}
                    />
                </div>
                <div
                    className='flex-1 flex flex-col gap-y-[4px] '
                >
                    <div className='flex gap-x-1'>
                        <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Quốc gia</p>
                    </div>
                    <Input
                        className=""
                        placeholder="Nhập quốc gia.."
                        value={field.nation}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                nation: value
                            }))
                        }}
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

const FormShowtimes = ({
    data,
    dataShowTime,
    callbackData
}) => {

    const [field, setField] = useState({
        price: 0,
        start_time: '',
        end_time: ''
    })

    let [listShowTime, setListShowTime] = useState([...data])
    const onAdd = () => {
        const listKeys = Object.keys(field);
        for (let i = 0; i < listKeys.length; i++) {
            const key = listKeys[i];

            if (!field[key]) {
                let mess = '';
                if (key === 'price') {
                    mess = 'giá'
                }
                if (key === 'start_time') {
                    mess = 'giờ bắt đầu'
                }
                if (key === 'end_time') {
                    mess = 'giờ kết thúc'
                }
                toast.warn(`Bạn chưa điền ${mess}`)

                return;
            }
        }

        let objPush = {
            price: field.price,
            start_time: field.start_time,
            end_time: field.end_time,
            id: helper.getUniqueString()
        }
        let clone = [...listShowTime];
        clone.push(objPush)
        setListShowTime(clone)
        setField({
            price: 0,
            start_time: '',
            end_time: ''
        })
    }

    const onRemove = (id) => {
        let clone = [...listShowTime];
        clone = clone.filter(it => it.id !== id)
        setListShowTime(clone)
    }

    useEffect(() => {
        if (listShowTime.length > 0) {
            callbackData({
                field: listShowTime,
                step: 1,
                isValid: true
            })
        } else {
            callbackData({
                field: [],
                step: 1,
                isValid: false
            })
        }
    }, [listShowTime])

    return (
        <div className='flex flex-col gap-y-4  min-h-[510px]'>
            <div
                className='flex flex-col gap-y-1 '
            >
                <p className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giờ đã có lịch</p>
                <div
                    className='flex gap-x-2 '
                >
                    {
                        (() => {
                            if (!dataShowTime || !dataShowTime.length) {
                                return (
                                    <div className='p-[6px] flex items-center justify-center bg-[#FFF8E8] rounded '>
                                        <span className='text-[#FDB022] text-xs not-italic font-medium leading-4'>Hiện chưa có lịch nào</span>
                                    </div>
                                )
                            }

                            return dataShowTime.map((it, index) => {
                                return (
                                    <div
                                        key={index}
                                        className='p-[6px] flex items-center justify-center bg-[#FFF8E8] rounded '
                                    >
                                        <span className='text-[#FDB022] text-xs not-italic font-medium leading-4'>{it.start_time} - {it.end_time}</span>
                                    </div>
                                )
                            })
                        })()
                    }
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
                        type="number"
                        placeholder="Nhập giá vé.."
                        value={field.price}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                price: value
                            }))
                        }}
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
                            value={field.start_time}
                            onChange={(value) => {
                                setField(prev => ({
                                    ...prev,
                                    start_time: value
                                }))
                            }}
                        />
                        <span className='text-[#364152] text-sm not-italic font-normal leading-5'>-</span>
                        <Input
                            className=""
                            placeholder="Giờ kết thúc.."
                            value={field.end_time}
                            onChange={(value) => {
                                setField(prev => ({
                                    ...prev,
                                    end_time: value
                                }))
                            }}
                        />
                    </div>
                </div>

                <div
                    className='flex-none flex flex-col gap-y-[4px] self-end '
                >
                    <Button
                        className="flex self-end px-[16px] py-[10px] rounded-lg bg-[#EEF2FF] text-[#4F46E5] text-sm not-italic font-medium leading-5 cursor-pointer"
                        text="Thêm"
                        onClick={onAdd}
                    />
                </div>
            </div>
            <div
                className='flex flex-col gap-y-1'
            >
                <label className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Giờ đã cài</label>
                <div className='flex gap-x-2'>
                    {
                        listShowTime && listShowTime.length > 0 &&
                        listShowTime.map((it, index) => {
                            return (
                                <div
                                    className='flex bg-[#EEF2FF] rounded'
                                    key={index}
                                >
                                    <div className='flex flex-col items-center justify-center px-[6px] py-1  '>
                                        <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>{it.start_time} - {it.end_time}</p>
                                        <p className='text-[#6366F1] not-italic font-medium leading-3 text-[10px]'>{it.price} đ</p>
                                    </div>
                                    <div
                                        className='p-[2px] flex items-center justify-center cursor-pointer'
                                        onClick={() => { onRemove(it.id) }}
                                    >
                                        <IconWrapper className="p-[2px] flex items-center justify-center cursor-pointer" width={16}>
                                            <SvgIcon icon={<IconClose fill="#9AA4B2" />} />
                                        </IconWrapper>
                                    </div>
                                </div>
                            )
                        })
                    }
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

    const [defaultTab, setDefaultTab] = useState(0);

    const [dataFormAddFilm, setDataFormAddFilm] = useState();
    const [dataFormShowtimes, setDataFormShowtimes] = useState();

    const [dataShowTime, setDataShowTime] = useState([]);

    useEffect(() => {
        async function fetch() {
            const dataRespon = await managerFilm.getListShowTime({
                calendar_day: format(day, 'yyyy-MM-dd')
            })
            setDataShowTime(dataRespon || [])
        }

        fetch()
    }, [])

    const CompActive = tabs[defaultTab]?.component;

    let canSubmit = false;

    if (defaultTab === 0) {
        canSubmit = dataFormAddFilm?.isValid
    } else {
        canSubmit = dataFormShowtimes?.isValid && dataFormAddFilm?.isValid
    }
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
            {
                CompActive &&
                <CompActive
                    onClose={onClose}
                    callbackData={(data) => {
                        if (data.step === 0) {
                            setDataFormAddFilm(data)
                        } else {
                            setDataFormShowtimes(data)
                        }
                    }}
                    data={defaultTab === 1 ? dataFormShowtimes?.field : dataFormAddFilm?.field}
                    dataShowTime={dataShowTime}
                />
            }
            <div className='flex gap-x-4 mb-5 justify-end'>
                <Button
                    onClick={() => {
                        if (defaultTab === 1) {
                            setDefaultTab(0)
                        } else {
                            onClose()
                        }
                    }}
                    text={defaultTab === 1 ? 'Quay lại' : "Huỷ"}
                    className="flex items-center justify-center px-[10px] py-4 rounded-lg bg-[#F8FAFC] cursor-pointer text-[#697586] text-sm not-italic font-medium leading-5"
                />
                <Button
                    text={defaultTab === 1 ? 'Hoàn thành' : "Tiếp theo"}
                    onClick={() => {
                        if (canSubmit) {
                            setDefaultTab(prev => {
                                if (prev + 1 <= tabs.length) {
                                    prev += 1;
                                }
                                return prev
                            })
                        }
                    }}
                    className={classNames(
                        "flex items-center justify-center px-[10px] py-4 rounded-lg cursor-pointer text-sm not-italic font-medium leading-5",
                        !canSubmit ? "bg-[#E3E8EF] text-[#CDD5DF]" : "bg-[#4F46E5] text-[#FFF]"
                    )}
                />
            </div>
        </div>
    );
}

export default CreateFilm;