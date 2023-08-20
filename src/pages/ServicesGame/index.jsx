import React from 'react'
import ListServicesGame from './ListServicesGame'
import ComboCreated from './ComboCreated'

export default function ServicesGame() {
    return (
        <section
            className='p-[20px] flex gap-x-[20px] h-[calc(100%-76px)]'
        >
            <ListServicesGame />
            <ComboCreated />
        </section>
    )
}
