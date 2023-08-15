import classNames from "classnames";
import { useState } from "react";

const Tab = ({
    data = [],
    defaultValue = -1,
    onChange = () => { }
}) => {
    return (
        <div className="flex gap-x-4 ">
            {
                data && data.length > 0 &&
                data.map(({ value, label }, index) => {
                    return (
                        <p key={index} onClick={() => { onChange(value) }} className={
                            classNames(
                                "text-sm not-italic font-medium leading-5 cursor-pointer",
                                defaultValue === value ? 'text-[#364152]' : 'text-[#9AA4B2]'
                            )
                        }>{label}</p>
                    )
                })
            }
        </div>
    )
}

const Info = ({ label, value }) => {
    return (
        <div className="flex justify-between py-5 px-4 items-center rounded-lg border border-solid border-[#E3E8EF]">
            <p className="text-[#697586] text-sm not-italic font-medium leading-5">{label}:</p>
            <p className="text-[#697586] text-base not-italic font-bold leading-5">{value}</p>
        </div>
    )
}

function CurrentChoice() {
    const [defaultValue, setDefaultValue] = useState(0)
    return (
        <div className="py-[20px] flex flex-col gap-y-[20px] ">
            <Tab
                data={[
                    { label: 'Hôm nay', value: 0 },
                    { label: 'Tuần này', value: 1 },
                    { label: 'Tháng này', value: 2 },
                ]}
                defaultValue={defaultValue}
                onChange={(value) => { setDefaultValue(value) }}
            />
            <Info
                label="Lịch đã cài"
                value={8}
            />

            <Info
                label="Phim đã thêm"
                value={7}
            />

            <Info
                label="Phim đã xóa"
                value={8}
            />

            <Info
                label="Phim đã ẩn"
                value={8}
            />

            <Info
                label="Phim chưa cài lịch"
                value={8}
            />
        </div>
    );
}

export default CurrentChoice;