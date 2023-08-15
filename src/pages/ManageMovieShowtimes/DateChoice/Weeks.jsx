import { useMemo } from "react";
import Week from "./Week";

function Weeks({
    currentMonth,
    currentYear
}) {

    const weeks = useMemo(() => {
        const weekStartDates = [];
        const firstDay = new Date(currentYear, currentMonth, 1);

        const startDay = new Date(firstDay);
        startDay.setDate(firstDay.getDate() - firstDay.getDay());
        for (let i = 0; i < 6; i++) {
            weekStartDates.push(new Date(startDay));
            startDay.setDate(startDay.getDate() + 7);
        }

        return weekStartDates;
    }, [currentYear, currentMonth])
    return (
        <div className="mt-2 flex flex-col gap-y-[4px]">
            {
                weeks && weeks.length > 0 &&
                weeks.map((info, index) => {
                    return <Week key={index} week={info} currentMonth={currentMonth}/>
                })
            }
        </div>
    );
}

export default Weeks;