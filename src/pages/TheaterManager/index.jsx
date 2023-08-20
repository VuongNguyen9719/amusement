import React from 'react'
import Actions from './Actions'
import Main from './Main'

export default function TheaterManager() {
    return (
        <div
            className='flex p-[20px] gap-x-[20px] flex-1 flex-col'
        >
            <div className='flex flex-col gap-y-3 rounded-xl bg-white items-center flex-1'>
                <Actions />
                <Main />
            </div>
        </div>
    )
}
