function NumberSeat({
    range = [],
    itemsSeats = [],
    classSeat = 'w-11 h-11 flex w-11 h-11 p-3 flex-col items-center justify-center rounded border border-solid border-[#E3E8EF] bg-[#F8FAFC] text-[#697586] text-base not-italic font-semibold leading-5'
}) {
    return (
        <div className="flex flex-col items-center justify-center gap-y-2">
            {
                itemsSeats && itemsSeats.length > 0 &&
                itemsSeats.map((it, index) => {
                    return (
                        <div className="flex gap-x-2 items-center justify-center" key={index}>
                            {
                                range && range.length > 0 &&
                                range.map((number, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={classSeat}
                                        >
                                            <span className="">{number}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    );
}

export default NumberSeat;