import ItemFilm from "./ItemFilm";

function GroupFilm({
    label,
    items,
    calendar_day
}) {
    return (
        <div
            className="flex flex-col px-[20px] gap-y-[20px] mb-[20px]"
        >
            <label className="text-[#364152] text-base not-italic font-medium leading-5 flex-none">{label}</label>
            <div
                className="flex flex-1 items-start content-start self-stretch flex-wrap gap-[20px]"
            >
                {
                    items && items.length > 0 &&
                    items.map((item, index) => {
                        return (
                            <ItemFilm
                                key={item.id}
                                {...item}
                                index={index + 1}
                                calendar_day={calendar_day}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default GroupFilm;