import React from 'react'
import Services from './Services'
import ComboAdded from './ComboAdded'

export default function AdditionalServices() {
    return (
        <section
            className='p-[20px] flex gap-x-[20px] h-[calc(100%-76px)]'
        >
            <Services></Services>
            <ComboAdded></ComboAdded>
        </section>
    )
}
