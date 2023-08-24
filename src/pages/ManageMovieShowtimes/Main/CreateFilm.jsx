import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
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
import enumStatusLoading from '~common/constants/enumStatusLoading'
import DatePickerCustom from '~formControls/DatePicker';
import Loading from '~formControls/Loading'
import { onClosedDialogAddFilm } from '../../../redux-store/Actions/filmActions';
import { useDispatch } from 'react-redux'
import media from '../../../api/media';

const FormAddFilm = ({ onClose, callbackData, data, isValid }) => {
    const [field, setField] = useState({
        name: '',
        original_name: '',
        description: '',
        duration: '',
        genre: '',
        premiere_schedule: new Date().getTime(),
        classify: '',
        actors: '',
        directors: '',
        format_movie: '',
        nation: '',
        avatar: '',
        trailer: '',
        ...data
    })
    const imgInputRef = useRef();
    const listFieldRequired = ['name', 'original_name', 'description', 'duration', 'genre']
    const countUpdate = useRef(0)
    useEffect(() => {
        if (data && Object.keys(data).length > 0 && countUpdate.current === 0 && isValid) {
            console.log('data >>>', data);
            setField(data)
            countUpdate.current = 1
        }
    }, [data, isValid])

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

    const handleImageChange = (event) => {

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const base64 = e.target.result;
                const respon = await media.uploadFile(base64); //todo
            };
            reader.readAsDataURL(file);
        }
    }
    const triggerInputClick = (inputRef) => {
        inputRef.current.click();
    };
    const onShowModalAddVideo = () => {

    }
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
                    <DatePickerCustom
                        startDate={field.premiere_schedule}
                        onChange={(date) => {
                            setField(prev => ({
                                ...prev,
                                premiere_schedule: new Date(date).getTime()
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
                        value={field.format_movie}
                        onChange={(value) => {
                            setField(prev => ({
                                ...prev,
                                format_movie: value
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
                    <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'
                        onClick={() => { triggerInputClick(imgInputRef) }}
                    >
                        <IconWrapper width={28}>
                            <SvgIcon icon={<IconAddPhoto />} />
                        </IconWrapper>
                        <input
                            type="file"
                            accept="image/*"
                            ref={imgInputRef}
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-y-1  cursor-pointer'>
                    <label className='text-[#4B5565] text-sm not-italic font-normal leading-5'>Trailer phim</label>
                    <div className='p-[10px] flex items-center justify-center w-[100px] h-[100px] rounded-lg border border-solid border-[#E3E8EF] bg-[#FCFCFD]'
                        onClick={onShowModalAddVideo}
                    >
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
        start_time: new Date().getTime(),
        end_time: new Date().getTime()
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
            start_time: new Date().getTime(),
            end_time: new Date().getTime()
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
                    className='flex flex-wrap gap-2'
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
                        <DatePickerCustom
                            startDate={field.start_time}
                            onChange={(date) => {
                                setField(prev => ({
                                    ...prev,
                                    start_time: new Date(date).getTime()
                                }))
                            }}
                        />

                        <span className='text-[#364152] text-sm not-italic font-normal leading-5'>-</span>
                        <DatePickerCustom
                            startDate={field.end_time}
                            onChange={(date) => {
                                setField(prev => ({
                                    ...prev,
                                    end_time: new Date(date).getTime()
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
                <div className='flex gap-2 flex-wrap'>
                    {
                        listShowTime && listShowTime.length > 0 &&
                        listShowTime.map((it, index) => {
                            return (
                                <div
                                    className='flex bg-[#EEF2FF] rounded'
                                    key={index}
                                >
                                    <div className='flex flex-col items-center justify-center px-[6px] py-1  '>
                                        <div className='flex gap-x-1 items-center'>
                                            <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>{typeof it.start_time === 'string' ? it.start_time : format(new Date(it.start_time), 'HH:mm:ss')}</p> -
                                            <p className='text-[#364152] text-xs not-italic font-medium leading-4 '>{typeof it.end_time === 'string' ? it.end_time : format(new Date(it.end_time), 'HH:mm:ss')}</p>
                                        </div>
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
    day,
    id
}) {
    const tabs = [
        { label: 'Thông tin phim', value: 0, component: FormAddFilm },
        { label: 'Cài lịch chiếu', value: 1, component: FormShowtimes },
    ]

    const dispatch = useDispatch();
    const [defaultTab, setDefaultTab] = useState(0);

    const [dataFormAddFilm, setDataFormAddFilm] = useState();
    const [dataFormShowtimes, setDataFormShowtimes] = useState();
    const [dataShowTime, setDataShowTime] = useState([]);
    const [statusFetch, setStatusFetch] = useState(enumStatusLoading.NONE)

    useEffect(() => {
        async function fetch() {
            const dataRespon = await managerFilm.getListShowTime({
                calendar_day: format(day, 'yyyy-MM-dd')
            })
            setDataShowTime(dataRespon || [])
        }
        fetch()
    }, [])

    useEffect(() => {
        if (id) {
            setStatusFetch(enumStatusLoading.LOADING);
            async function fetch() {
                try {
                    const respon = await managerFilm.getDetailFilm({
                        movie_id: id
                    });

                    if (respon) {
                        setStatusFetch(enumStatusLoading.SUCCESS)
                        setDataFormAddFilm({
                            field: {
                                "name": respon.name,
                                "original_name": respon.original_name,
                                "avatar": respon.avatar,
                                "description": respon.description,
                                "duration": respon.duration,
                                "genre": respon.genre,
                                "status": 1,
                                "nation": respon.nation,
                                "classify": respon.classify,
                                "format_movie": respon.format_movie,
                                "premiere_schedule": new Date(respon.premiere_schedule).getTime(),
                                "trailer": respon.trailer,
                                "directors": respon.directors,
                                "actors": respon.actors,
                                "calendar_day": format(day, 'yyyy-MM-dd'),
                            },
                            step: 0,
                            isValid: true
                        })
                        setDataFormShowtimes({
                            field: respon.show_times,
                            step: 0,
                            isValid: true
                        })
                    } else {
                        setStatusFetch(enumStatusLoading.ERROR)
                    }

                } catch (error) {
                    setStatusFetch(enumStatusLoading.ERROR)
                    toast.error(`Đã xảy ra lỗi khi lấy thông tin phim. Lỗi: ${error}`)
                }
            }
            fetch()
        }
    }, [id])

    const onsubmit = async () => {
        if (!dataFormAddFilm || !dataFormAddFilm.isValid || !dataFormShowtimes || !dataFormShowtimes.isValid) {
            return toast.warn('Bạn chưa điền đủ thông tin!')
        }

        if (statusFetch === enumStatusLoading.LOADING) {
            return toast.warn('Hệ thống đang xử lý, vui lòng chờ trong giây lát!')
        }
        setStatusFetch(enumStatusLoading.LOADING);

        const fieldFormAddFilm = dataFormAddFilm?.field || {}
        const dataShowTimes = [];
        if (dataFormShowtimes.field && dataFormShowtimes.field.length > 0) {
            dataFormShowtimes.field.forEach((it) => {
                dataShowTimes.push({
                    "price": it.price,
                    "start_time": typeof it.start_time === 'string' ? it.start_time : format(new Date(it.start_time), 'HH:mm:ss'),
                    "end_time": typeof it.end_time === 'string' ? it.end_time : format(new Date(it.end_time), 'HH:mm:ss'),
                })
            })
        }
        let data = {
            "name": fieldFormAddFilm.name,
            "original_name": fieldFormAddFilm.original_name,
            "avatar": fieldFormAddFilm.avatar,
            "description": fieldFormAddFilm.description,
            "duration": fieldFormAddFilm.duration,
            "genre": fieldFormAddFilm.genre,
            "status": 1,
            "nation": fieldFormAddFilm.nation,
            "classify": fieldFormAddFilm.classify,
            "format_movie": fieldFormAddFilm.format_movie,
            "premiere_schedule": format(new Date(fieldFormAddFilm.premiere_schedule), 'yyyy-MM-dd HH:mm:ss.SSS'),
            "trailer": fieldFormAddFilm.trailer,
            "directors": fieldFormAddFilm.directors,
            "actors": fieldFormAddFilm.actors,
            "calendar_day": format(day, 'yyyy-MM-dd'),
            "show_times": dataShowTimes
        }
        if (id) {
            data.id = id;
        }
        try {
            const respon = id ? await managerFilm.updateMovie(data) : await managerFilm.createMovie(data);

            if (respon) {
                setStatusFetch(enumStatusLoading.SUCCESS)
                toast.success(id ? 'Sửa phim thành công!' : 'Thêm phim thành công!')
                onClose()
                dispatch(onClosedDialogAddFilm())
            } else {
                setStatusFetch(enumStatusLoading.ERROR)
            }

        } catch (error) {
            setStatusFetch(enumStatusLoading.ERROR)
            toast.error(`Đã xảy ra lỗi khi ${id ? 'sửa' : 'thêm'} phim. Lỗi: ${error}`)
        }
    }

    const CompActive = tabs[defaultTab]?.component;

    let canSubmit = false;

    if (defaultTab === 0) {
        canSubmit = dataFormAddFilm?.isValid
    } else {
        canSubmit = dataFormShowtimes?.isValid && dataFormAddFilm?.isValid
    }
    return (
        <div className="px-[20px] flex flex-col gap-y-[20px] relative max-w-[880px]">
            {enumStatusLoading.LOADING === statusFetch && <Loading />}
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
                    data={defaultTab === 1 ? dataFormShowtimes?.field || [] : dataFormAddFilm?.field || {}}
                    dataShowTime={dataShowTime}
                    isValid={defaultTab === 1 ? dataFormShowtimes?.isValid : dataFormAddFilm?.isValid}
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
                            if (defaultTab === 1) {
                                onsubmit()
                            } else {
                                setDefaultTab(prev => {
                                    if (prev + 1 <= tabs.length) {
                                        prev += 1;
                                    }
                                    return prev
                                })
                            }
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