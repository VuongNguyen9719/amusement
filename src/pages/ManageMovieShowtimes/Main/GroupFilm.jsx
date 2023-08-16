import ItemFilm from "./ItemFilm";

function GroupFilm() {
    return (
        <div
            className="flex flex-col px-[20px] gap-y-[20px] mb-[20px]"
        >
            <label className="text-[#364152] text-base not-italic font-medium leading-5 flex-none">Hôm nay 09/08/2023</label>
            <div
                className="flex flex-1 items-start content-start self-stretch flex-wrap gap-[20px]"
            >
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
                <ItemFilm />
            </div>
        </div>
    );
}

export default GroupFilm;