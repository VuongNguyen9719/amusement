
import React, { useState, useRef, useEffect, Fragment } from 'react';

import { showDialogCreateFilm } from '~reduxStore/actions'
import CreateFilm from '~pages/ManageMovieShowtimes/Main/CreateFilm';
import { useStore } from "react-redux";
import Dialog from '~common/formControls/Dialog';

function DialogCreateFilm() {

    const [open, setOpen] = useState(false);
    const dialogProps = useRef();
    const store = useStore();
    const onClose = () => {
        setOpen(false)
    };
    useEffect(() => {
        return store.onDispatch(action => {
            if (showDialogCreateFilm.match(action)) {
                dialogProps.current = action.payload;
                setOpen(true)
            }
        })
    }, []);
    return (
        <Dialog
            open={open}
            onClose={onClose}
            title="Thêm phim"
        >
            <CreateFilm {...dialogProps.current} onClose={onClose} />
        </Dialog>
    );
}

export default DialogCreateFilm;