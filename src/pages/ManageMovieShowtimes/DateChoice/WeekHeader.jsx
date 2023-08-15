function WeekHeader() {
    const listHeaders = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
    return (
        <div className="flex items-center">
            {
                listHeaders.map(header => {
                    return (
                        <p key={header} className="text-[#4B5565] text-sm not-italic font-medium leading-5 text-center flex-1 py-[7px] flex items-center justify-center">{header}</p>
                    )
                })
            }
        </div>
    );
}

export default WeekHeader;