import React from 'react'
import Main from './Main'
import DateChoice from './DateChoice'
import Loading from '~formControls/Loading'
import { useSelector } from 'react-redux'
import enumStatusLoading from '../../common/constants/enumStatusLoading'

export default function ManageMovieShowtimes() {
    const { status } = useSelector((state) => state.ManagerMovieShowTimes)
    return (
        <div
            className='flex p-[20px] gap-x-[20px] h-[calc(100%-76px)] relative'
        >
            {
                status === enumStatusLoading.LOADING &&
                <Loading mess="Đang tải dữ liệu film ..." />
            }
            <Main />
            <DateChoice />
        </div>
    )
}
