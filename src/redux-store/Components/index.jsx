import { Fragment } from "react";

import DialogCreateFilm from './DialogCreateFilm'
import Popper from "./Popper";


export default function Dialogs() {
    return (
        <Fragment>
            <DialogCreateFilm />
            <Popper />
        </Fragment>
    )
}
