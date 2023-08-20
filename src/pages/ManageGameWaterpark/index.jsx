import React from 'react'
import ListGame from './ListGame'
import ComboCreated from './ComboCreated'

export default function ManageGameWaterpark() {
    return (
        <section
            className='p-[20px] flex gap-x-[20px] h-[calc(100%-76px)]'
        >
            <ListGame />
            <ComboCreated />
        </section>
    )
}
 