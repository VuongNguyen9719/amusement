import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';


const PopperDialog = ({
    open = false,
    onClose = () => {},
    popperProps = {},
    getRef = () => {},
    ...res
}) => {

    const {element, component: Component , ...resProps} = popperProps;
    const [isOpen, setIsOpen] = useState(open);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (open !== isOpen) {
            setIsOpen(open)
        }
    }, [open]);

    const closeTimeoutRef = useRef(null);
    const closePopper = () => {
        setIsClosing(true);
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }
        closeTimeoutRef.current = setTimeout(() => {
            setIsOpen(false)
            setIsClosing(false); 
            onClose()
        }, 300);
    }
    
    if(!Component || !element || !open) {
        return
    }
    const rectElement = element.getBoundingClientRect();
    const posX = rectElement.x, posY = rectElement.y; // todo: calculator position
    return (
        <div 
            className={classNames(
            "fixed z-10 transition-opacity p-2 rounded bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.12) border border-solid border-[#e3e3e3]",
            isClosing ? 'opacity-0' : 'opacity-100',
            )}
            style={{
                top: `${posY + rectElement.height + 10}px`,
                left: `${posX}px`,
            }}
            ref={(elm) => {getRef(elm)}}
        >
            <Component 
                onClose={onClose}
                {...resProps}
            />
        </div>
    );
};

PopperDialog.propTypes = {
    
};

export default PopperDialog;