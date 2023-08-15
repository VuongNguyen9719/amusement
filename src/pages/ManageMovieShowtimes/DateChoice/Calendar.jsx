import { useState } from "react";
import MonthHeader from "./MonthHeader";
import WeekHeader from "./WeekHeader";
import Weeks from "./Weeks";

function Datepicker() {
    const dateNow = new Date();
    const [currentMonth, setCurrentMonth] = useState(dateNow.getMonth())
    const [currentYear, setCurrentYear] = useState(dateNow.getFullYear())

    return (
        <div className="py-[20px]">
            <MonthHeader
                currentMonth={currentMonth}
                currentYear={currentYear}
                onChange={(newDate) => {
                    setCurrentMonth(newDate.getMonth())
                    setCurrentYear(newDate.getFullYear())
                }}
            />
            <WeekHeader />
            <Weeks
                currentMonth={currentMonth}
                currentYear={currentYear}
            />
        </div>
    );
}

export default Datepicker;