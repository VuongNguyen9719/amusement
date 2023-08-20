import classNames from "classnames";

function RowAddCombo({
    title,
    isRequired,
    children,
    classNameTitle
}) {
    return (
        <div className="flex flex-col gap-y-1 flex-1">
            <div className="flex items-center gap-x-1">
                <p className={classNames(
                    "text-[#4B5565] text-sm not-italic font-normal leading-5",
                    classNameTitle
                )}>{title}</p>
                {isRequired && <span className="text-[#F97066] text-sm not-italic font-normal leading-5">*</span>}
            </div>
            {children}
        </div>
    );
}

export default RowAddCombo;