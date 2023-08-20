import { cloneElement, useEffect, useRef, useState, } from "react";
import classNames from "classnames";
import IconClose from "~assets/svg/IconClose";
import useClickOutside from '~hooks/useClickOutside'

function Dialog({
    children,
    open = false,
    className = '',
    classNameTitle = '',
    title = 'Tiêu đề',
    onClose = () => { }
}) {
    const [isOpen, setIsOpen] = useState(open);
    const [isClosing, setIsClosing] = useState(false);
    useEffect(() => {
        // if (!open) {
        //     setIsClosing(true); // Khi đóng, bắt đầu hiệu ứng fade-out
        //     if (closeTimeoutRef.current) {
        //         clearTimeout(closeTimeoutRef.current)
        //     }
        //     closeTimeoutRef.current = setTimeout(() => {
        //         setIsOpen(false)
        //         setIsClosing(false); // Khi hoàn thành fade-out, đóng dialog
        //     }, 300);
        // }else {
        //     setIsOpen(true)
        // }
        setIsOpen(open)
    }, [open])

    const closeTimeoutRef = useRef(null);
    const closeDialog = () => {
        setIsClosing(true); // Khi đóng, bắt đầu hiệu ứng fade-out
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false); // Khi hoàn thành fade-out, đóng dialog
        }, 300);
    }

    useEffect(() => {
        if (!isOpen) {
            onClose()
        }
    }, [isOpen])
    if (!isOpen) {
        return
    }

    return (
        <div className={classNames(
            "fixed inset-0 flex justify-center items-center z-10 transition-opacity",
            isClosing ? 'opacity-0' : 'opacity-100'

        )}
        >
            <div className="w-full h-full fixed bg-black bg-opacity-50 animate-fade-in z-10" onClick={closeDialog}></div>
            <div className="z-20 flex gap-x-[12px]">
                <div className={classNames("flex flex-col gap-y-[20px] rounded-xl bg-[#FFF] overflow-hidden min-w-[880px]", className)}>
                    <div
                        className={classNames(
                            "flex justify-between items-center self-stretch px-[20px] py-[12px] bg-[#EEF2FF]",
                            classNameTitle
                        )}
                    >
                        <p className="w-full text-center text-xl not-italic font-semibold leading-7 text-[#4F46E5]">{title}</p>
                    </div>
                    <div
                    >
                        {cloneElement(children, { onClose })}
                    </div>
                </div>
                <div className="flex w-[40px] h-[40px] p-2 justify-center items-center rounded-[99px] bg-[#22293499] cursor-pointer" onClick={onClose}>
                    <IconClose />
                </div>
            </div>
        </div>
    )
}

export default Dialog;