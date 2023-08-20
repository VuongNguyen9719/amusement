
import React, { useState, useRef, useEffect, Fragment } from 'react';

import { showPopper } from '~reduxStore/actions'
import { useStore } from "react-redux";

import useClickOutside from '~hooks/useClickOutside'
import classNames from 'classnames';

function Popper() {

    const [open, setOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [popperProps, setPopperProps] = useState({});
    const { element, component: Component, ...resProps } = popperProps;
    const [pos, setPos] = useState({
        x: 0,
        y: 0,
        isShow: false
    })

    const refWrap = useRef();

    const closeTimeoutRef = useRef(null);
    const openTimeoutRef = useRef(null);

    const store = useStore();

    const closePopper = () => {
        setIsClosing(true);
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current)
        }
        closeTimeoutRef.current = setTimeout(() => {
            setOpen(false)
            setIsClosing(false);
        }, 300);
    }

    useClickOutside(refWrap, () => closePopper());

    useEffect(() => {
        return store.onDispatch(action => {
            if (showPopper.match(action)) {
                const props = action.payload;
                setPopperProps(props);
                setOpen(prev => props?.element != popperProps?.element ? true : !prev)
            }
        })
    }, []);
    const rectElement = element?.getBoundingClientRect();

    useEffect(() => {
        if (!element) {
            return;
        }
        setIsOpening(true);
        if (openTimeoutRef.current) {
            clearTimeout(openTimeoutRef.current)
        }
        openTimeoutRef.current = setTimeout(() => {
            const widthSreen = window.innerWidth, heightSreen = window.innerHeight;
            const { x, y, height } = rectElement;
            const widthElm = refWrap.current?.offsetWidth || 0,
                heightElm = refWrap.current?.offsetHeight || 0;
            let newPos = { ...pos };
            const PADDING = 10;
            newPos.x = x, newPos.y = y + height + PADDING;
            if (widthElm + newPos.x >= widthSreen) {
                newPos.x = widthSreen - widthElm - PADDING;
            }
            if (heightElm + newPos.y >= heightSreen) {
                newPos.y = heightSreen - heightElm - PADDING;
            }
            newPos.isShow = true
            setPos(newPos)
            setIsOpening(false);
        }, 300);
        return () => {
            if (openTimeoutRef.current) {
                clearTimeout(openTimeoutRef.current)
            }
            if (closeTimeoutRef.current) {
                clearTimeout(closeTimeoutRef.current)
            }
        }
    }, [element])

    if (!Component || !element || !open) {
        return
    }
    let posX = pos.x, posY = pos.y;
    return (
        <div
            className={classNames(
                "fixed z-10 transition-all p-2 rounded bg-[#FFF] shadow-[0_0_6px_0_rgba(0,0,0,0.12) border border-solid border-[#e3e3e3]",
                isClosing ? 'opacity-0' : 'opacity-100',
                isOpening ? 'opacity-0' : 'opacity-100',
            )}
            style={{
                top: `${posY}px`,
                left: `${posX}px`,
            }}
            ref={refWrap}
        >
            <Component
                onClose={closePopper}
                {...resProps}
            />
        </div>
    );
}

export default Popper;