import { Fragment } from "react";
// const DialogCreateFilm = lazyLoad(() => import('./DialogCreateFilm'));

import DialogCreateFilm from './DialogCreateFilm'

export default function Dialogs() {
    return (
        <Fragment>
            <DialogCreateFilm />
        </Fragment>
    )
}
