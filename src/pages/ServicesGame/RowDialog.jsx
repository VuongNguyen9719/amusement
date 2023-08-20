import classNames from "classnames";

function RowDialog({
    label = "",
    children = {},
    className,
    isRequired = false
}) {
    return (
        <div className={classNames(
            "flex flex-col gap-y-1",
            className
        )}>
            <div className="flex gap-x-[3px]">
                <p className="text-[#4B5565] text-sm not-italic font-normal leading-5">{label}</p>
                {isRequired && <p className="text-[#F97066] text-sm not-italic font-normal leading-5">*</p>}
            </div>
            {children}
        </div>
    );
}

export default RowDialog;