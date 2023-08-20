import { Fragment } from "react";

import DialogCreateFilm from './DialogCreateFilm'
import DialogWrap from './DialogWrap'
import Popper from "./Popper";


export default function Dialogs() {
    return (
        <Fragment>
            <DialogCreateFilm />
            <DialogWrap />
            <Popper />
        </Fragment>
    )
}
