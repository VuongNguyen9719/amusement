
import React, { useState, useRef, useEffect, Fragment } from 'react';

import { showDialog } from "~reduxStore/Actions";
import { useStore } from "react-redux";
import Dialog from '~common/formControls/Dialog';

function DialogWrap() {
    const [open, setOpen] = useState(false);
    const [dialogProps, setDialogProps] = useState({});
    const store = useStore();
    const { element, component: Component, ...resProps } = dialogProps;
    const onClose = () => {
        setOpen(false)
    };
    useEffect(() => {
        return store.onDispatch(action => {
            if (showDialog.match(action)) {
                const props = action.payload;
                setDialogProps(props);
                setOpen(true)
            }
        })
    }, []);

    if (!Component) {
        return
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            {...resProps}
        >
            <Component />
        </Dialog>
    );
}

export default DialogWrap;