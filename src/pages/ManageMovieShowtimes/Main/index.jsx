import { useDispatch } from 'react-redux';

import { useEffect } from "react";
import Filter from "./Filter";
import ListGroupFilm from "./ListGroupFilm";
import { resetState } from '../../../redux-store/Slice/manage-movie-showtimes';

function Index() {

    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(resetState())
        }
    },[])

    return (
        <div
            className="flex-1 rounded-xl bg-[#FFF] h-full flex flex-col gap-y-[12px] "
        >
            
            <Filter />
            <ListGroupFilm />
        </div>
    );
}

export default Index;