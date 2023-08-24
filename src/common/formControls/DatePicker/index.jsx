import "./style.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IconDatePicker from '~assets/svg/IconDatePicker'
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import classNames from "classnames";



function DatePickerCustom({
    startDate,
    onChange = () => { },
    className = ""
}) {
    return (
        <div className={classNames(
            "date-container",
            className
        )}>
            <span className="date-input">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => onChange(date)}
                    dayClassName={() => "example-datepicker-day-class"}
                    popperClassName="example-datepicker-class"
                    todayButton="TODAY"
                    timeInputLabel="Giờ:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                />
            </span>
            <IconWrapper width={20} className='w-[30px]'>
                <SvgIcon icon={<IconDatePicker />} />
            </IconWrapper>
        </div>
    );
}

export default DatePickerCustom;