import Scrollbar from '@formControls/Scrollbar'
import GroupFilm from './GroupFilm';

function ListGroupFilm() {
    return (
        <Scrollbar
            className="h-[calc(100%-80px)]"
        >
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
            <GroupFilm />
        </Scrollbar>
    );
}

export default ListGroupFilm;