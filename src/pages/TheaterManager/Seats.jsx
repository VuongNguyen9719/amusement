function Seats({
    itemsSeats = []
}) {
    return (
        <div
            className="flex flex-col bg-[#E3E8EF] gap-y-2"
        >
            {
                itemsSeats && itemsSeats.length > 0 &&
                itemsSeats.map((it, index) => {
                    return (
                        <div className="flex w-11 px-[10px] py-3 items-center justify-center " key={index}>
                            <span className="text-[#312E81] text-sm not-italic font-medium leading-5 uppercase">{it}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Seats;