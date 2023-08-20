import React from 'react'
import ListGame from './ListGame'
import TicketCreated from './TicketCreated'

export default function ManageGame() {
    return (
        <section
            className='p-[20px] flex gap-x-[20px] h-[calc(100%-76px)]'
        >
            <ListGame />
            <TicketCreated />
        </section>
    )
}
