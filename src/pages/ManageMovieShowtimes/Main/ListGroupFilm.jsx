
import { useSelector, useDispatch } from 'react-redux'

import Scrollbar from '~formControls/Scrollbar'
import GroupFilm from './GroupFilm';
import { useEffect } from 'react';
import enumStatusLoading from '../../../common/constants/enumStatusLoading';
import { setStatus, setData, setMessage } from '../../../redux-store/Slice/manage-movie-showtimes';
import managerFilm from '../../../api/manager-film';
import { format, isToday, parseISO } from 'date-fns';

function ListGroupFilm() {
    const { data, status, filter, mess } = useSelector((state) => state.ManagerMovieShowTimes)
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetch() {
            // if (status === enumStatusLoading.LOADING) { // todo enalbe
            //     return
            // }
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
        fetch()
    }, [filter])

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
                    const today = new Date();
                    const groupedByDate = data.reduce((result, item) => {
                        const dateISO = parseISO(item.calendar_day);
                        const label = isToday(dateISO)
                            ? `Hôm nay ${format(dateISO, 'dd/MM/yyyy')}`
                            : `Ngày ${format(dateISO, 'dd/MM/yyyy')}`;
                        const existingGroup = result.find(group => group.label === label);

                        if (existingGroup) {
                            existingGroup.items.push(item);
                        } else {
                            result.push({ label: label, items: [item] });
                        }

                        return result;
                    }, []);

                    if (!groupedByDate || !groupedByDate.length) {
                        return null;
                    }
                    return groupedByDate.map((group) => {
                        return (
                            <GroupFilm
                                key={group.label}
                                {...group}
                            />
                        )
                    })
                })()
            }
            {/* <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm /> */}
        </Scrollbar>
    );
}

export default ListGroupFilm;