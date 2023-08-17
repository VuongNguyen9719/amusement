
import React, { useState, useRef, useEffect, Fragment } from 'react';

import { showPopper } from '~reduxStore/actions'
import { useStore } from "react-redux";

import PopperDialog from '~formControls/PopperDialog'
import useClickOutside from '~hooks/useClickOutside'

function Popper() {

    const [open, setOpen] = useState(false);
    const [popperProps, setPopperProps] = useState({});
    const refElement = useRef()
    const store = useStore();
    const onClose = () => {
        setOpen(false)
    };

    useClickOutside(refElement, () => onClose());

    useEffect(() => {
        return store.onDispatch(action => {
            if (showPopper.match(action)) {
                const props = action.payload;
                setPopperProps(props);
                setOpen(prev =>  props?.element !== popperProps?.element ? true : !prev)
            }
        })
    }, []);
    

    return (
        <PopperDialog
            open={open}
            onClose={onClose}
            popperProps={popperProps}
            getRef={(elm) => {refElement.current = elm}}
        />
    );
}

export default Popper;