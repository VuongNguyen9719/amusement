import Seats from "./Seats";

function TypeChairSpecial() {
    const itemsSeats = ['H']
    return (
        <div
            className="flex gap-x-6 justify-between"
        >
            <Seats
                itemsSeats={itemsSeats}
            />
            <div className="flex gap-x-[10px]">
                {
                    Array.from(Array(4).keys()).map((it, index) => {
                        return (
                            <div className="flex flex-col items-center justify-center p-3 w-[148px] h-11 rounded border border-solid border-[#1672EC] bg-[#E5F0FD]" key={index}>
                                <span className="text-[#1672EC] text-base not-italic font-semibold leading-5">1</span>
                            </div>
                        )
                    })
                }
            </div>
            <Seats
                itemsSeats={itemsSeats}
            />

        </div>
    );
}

export default TypeChairSpecial;