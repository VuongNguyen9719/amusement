
import IconWrapper from '~HOC/IconWrapper'
import SvgIcon from '~formControls/SvgIcon.jsx'
import ChevronLeft from '~assets/svg/ChevronLeft';
import ChevronRight from '~assets/svg/ChevronRight';

function MonthHeader({
    currentMonth,
    currentYear,
    onChange = () => { }
}) {

    return (
        <div
            className="mb-1 flex justify-between items-center "
        >
            <IconWrapper
                width={36}
                className="flex items-center justify-center p-[6px] cursor-pointer"
                onClick={() => {
                    const date = new Date(currentYear, currentMonth)
                    date.setMonth(currentMonth - 1)
                    onChange(date)
                }}
            >
                <SvgIcon icon={<ChevronLeft />} />
            </IconWrapper>
            <div className='flex gap-x-1'>
                <p className='text-[#4B5565] text-base not-italic font-normal leading-6'>Tháng {currentMonth + 1}</p>
                <p className='text-[#4B5565] text-base not-italic font-normal leading-6'>{currentYear}</p>
            </div>
            <IconWrapper
                width={36}
                className="flex items-center justify-center p-[6px] cursor-pointer"
                onClick={() => {
                    const date = new Date(currentYear, currentMonth)
                    date.setMonth(currentMonth + 1)
                    onChange(date)
                }}
            >
                <SvgIcon icon={<ChevronRight />} />
            </IconWrapper>
        </div>
    );
}

export default MonthHeader;