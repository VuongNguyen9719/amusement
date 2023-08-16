import classNames from "classnames";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import { showDialogCreateFilm } from '~reduxStore/Actions'

function Week({
    week,
    currentMonth
}) {

    const pad = (value, length) => {
        while (value.length < length)
            value = "0" + value;
        return value;
    }

    const toDayOfMonthString = (date) => {
        return pad(date.getDate().toString());
    }

    const days = useMemo(() => {
        const cloneDate = (date) => {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
        }
        let days = [cloneDate(week)];
        let clone = cloneDate(week);
        for (let i = 1; i <= 6; i++) {
            clone = cloneDate(clone);
            clone.setDate(clone.getDate() + 1);
            days.push(clone);
        }
        return days;
    }, [week])

    const dispatch = useDispatch()

    return (
        <div className="flex gap-x-[2px]">
            {
                days && days.map((day, i) => {
                    let dayString = toDayOfMonthString(day);
                    return (
                        <div
                            key={"day_" + i}
                            id={"day_" + i}
                            // onClick={this.onSelect.bind(null, day)}
                            className={classNames(
                                'flex-1 py-[7px] flex items-center justify-center text-sm not-italic font-normal leading-5 cursor-pointer',
                                day.getMonth() != currentMonth ? 'text-[#CDD5DF]' : 'rounded bg-white text-[#4B5565]',
                                'hover:bg-[#A5B4FC] hover:text-[#4F46E5]'
                            )}
                            style={{
                                boxShadow: day.getMonth() == currentMonth ? `0px 1px 2px 0px rgba(51, 51, 51, 0.08)` : ''
                            }}
                            onClick={() => dispatch(showDialogCreateFilm({ day }))}
                        >
                            {dayString}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Week;