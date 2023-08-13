import React from 'react'
import Threads from './Threads'
import VoucherManager from './VoucherManager'

export default function EventAndVoucher() {
    return (
        <section
            className='p-[20px] flex gap-x-[20px] h-[calc(100%-76px)]'
        >
            <Threads />
            <VoucherManager />
        </section>
    )
}
