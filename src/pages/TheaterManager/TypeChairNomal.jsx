import NumberSeat from "./NumberSeat";
import Seats from "./Seats";

function TypeChairNomal() {

    const itemsSeats = ['A', 'B', 'C', 'D', 'E']

    return (
        <div
            className="flex gap-x-6 "
        >
            <Seats
                itemsSeats={itemsSeats}
            />

            <NumberSeat 
                itemsSeats={itemsSeats}
                range={[1,2,3,4]}
            />
            <NumberSeat 
                itemsSeats={itemsSeats}
                range={[5,6,7,8,9,10]}
            />
            <NumberSeat 
                itemsSeats={itemsSeats}
                range={[11,12,13,14]}
            />

            <Seats
                itemsSeats={itemsSeats}
            />

        </div>
    );
}

export default TypeChairNomal;