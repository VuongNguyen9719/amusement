
import { useSelector, useDispatch } from 'react-redux'

import Scrollbar from '~formControls/Scrollbar'
import GroupFilm from './GroupFilm';
import { useEffect } from 'react';
import enumStatusLoading from '../../../common/constants/enumStatusLoading';
import { setStatus, setData, setMessage } from '../../../redux-store/Slice/manage-movie-showtimes';
import managerFilm from '../../../api/manager-film';
import { format, isToday, parseISO } from 'date-fns';
import { useStore } from "react-redux";
import { onClosedDialogAddFilm } from '../../../redux-store/Actions/filmActions';

function ListGroupFilm() {
    const { data, status, filter, mess } = useSelector((state) => state.ManagerMovieShowTimes)
    const dispatch = useDispatch();
    const store = useStore();
    async function fetch() {
        if (status === enumStatusLoading.LOADING) {
            return
        }
        dispatch(setStatus(enumStatusLoading.LOADING))
        try {
            const respon = await managerFilm.getFilmByDate({ ...filter });
            dispatch(setData(respon))
            dispatch(setStatus(enumStatusLoading.SUCCESS))
        } catch (error) {
            dispatch(setStatus(enumStatusLoading.ERROR))
            dispatch(setMessage(error))
        }
    }
    useEffect(() => {

        fetch()
    }, [filter])

    useEffect(() => {
        return store.onDispatch(action => {
            if (onClosedDialogAddFilm.match(action)) {
                fetch()
            }
        })
    }, []);

    const isEmptyData = status === enumStatusLoading.SUCCESS && (!data || !data.length)

    return (
        <Scrollbar
            className="h-[calc(100%-80px)]"
        >

            {
                status === enumStatusLoading.ERROR &&
                <div className=''>
                    Đã xảy ra lỗi khi tải dữ liệu.
                </div>
            }
            {
                (() => {
                    if (isEmptyData) {
                        return (
                            <p className='text-center'>
                                Không có dữ liệu film.
                            </p>
                        )
                    }
                    if (!data || !data.length) {
                        return null;
                    }
                    const groupedByDate = data.reduce((result, item) => {
                        let label = ''
                        if (!item.calendar_day || !item.calendar_day.length) {
                            label = 'Không xác định'
                        } else {
                            const dateISO = parseISO(item.calendar_day);
                            label = isToday(dateISO)
                                ? `Hôm nay ${format(dateISO, 'dd/MM/yyyy')}`
                                : `Ngày ${format(dateISO, 'dd/MM/yyyy')}`;
                        }

                        const existingGroup = result.find(group => group.label === label);

                        if (existingGroup) {
                            existingGroup.items.push(item);
                        } else {
                            result.push({ label: label, calendar_day: item.calendar_day, items: [item] });
                        }

                        return result;
                    }, []);

                    if (!groupedByDate || !groupedByDate.length) {
                        return null;
                    }

                    return groupedByDate
                        .sort((a, b) => {
                            const calendar_dayA = a.calendar_day
                            const calendar_dayB = b.calendar_day
                            if (calendar_dayA && calendar_dayA.length > 0 && calendar_dayB && calendar_dayB.length > 0) {
                                return new Date(calendar_dayB).getTime() - new Date(calendar_dayA).getTime()
                            }
                        })
                        .map((group) => {
                            return (
                                <GroupFilm
                                    key={group.label}
                                    {...group}
                                />
                            )
                        })
                })()
            }
        </Scrollbar>
    );
}

export default ListGroupFilm;