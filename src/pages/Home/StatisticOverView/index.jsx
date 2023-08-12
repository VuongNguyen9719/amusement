import BoxFilm from "./BoxFilm";
import BoxGame from "./BoxGame";
import BoxItemOverView from "./BoxItemOverView";
import BoxTotalRevenue from "./BoxTotalRevenue";
import BoxWaterPark from "./BoxWaterPark";

function StatisticOverView() {
    return ( 
        <section
            className="flex gap-[20px] flex-wrap"
        >
            <BoxFilm />
            <BoxGame />
            <BoxWaterPark />
            <BoxTotalRevenue />
        </section>

     );
}

export default StatisticOverView;