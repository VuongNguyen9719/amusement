import React from 'react'
import Main from './Main'
import DateChoice from './DateChoice'

export default function ManageMovieShowtimes() {
    return (
        <div
            className='flex p-[20px] gap-x-[20px] h-[calc(100%-76px)]'
        >
            <Main />
            <DateChoice />
        </div>
    )
}
