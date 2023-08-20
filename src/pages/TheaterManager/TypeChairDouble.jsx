import NumberSeat from "./NumberSeat";
import Seats from "./Seats";

function TypeChairDouble() {

    const itemsSeats = ['F', 'G']

    return (
        <div
            className="flex gap-x-6 "
        >
            <Seats
                itemsSeats={itemsSeats}
            />

            <NumberSeat
                itemsSeats={itemsSeats}
                range={[1, 2]}
                classSeat="flex flex-col items-center justify-center w-[96px] h-11 p-3 rounded border border-solid border-[#43A3D1] bg-[#EFF7FC]  text-[#43A3D1] text-base not-italic font-semibold leading-5 "
            />
            <NumberSeat
                itemsSeats={itemsSeats}
                range={[3, 4, 5]}
                classSeat="flex flex-col items-center justify-center w-[96px] h-11 p-3 rounded border border-solid border-[#43A3D1] bg-[#EFF7FC]  text-[#43A3D1] text-base not-italic font-semibold leading-5 "
            />
            <NumberSeat
                itemsSeats={itemsSeats}
                range={[6, 7]}
                classSeat="flex flex-col items-center justify-center w-[96px] h-11 p-3 rounded border border-solid border-[#43A3D1] bg-[#EFF7FC]  text-[#43A3D1] text-base not-italic font-semibold leading-5 "
            />

            <Seats
                itemsSeats={itemsSeats}
            />

        </div>
    );
}

export default TypeChairDouble;