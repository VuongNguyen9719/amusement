import { createSlice } from "@reduxjs/toolkit";
import enumStatusLoading from "../../common/constants/enumStatusLoading";

const ManagerMovieShowTimes = createSlice({
    name: "ManagerMovieShowTimes",
    initialState: {
        data: [],
        status: enumStatusLoading.NONE,
        mess: '',
        filter: {
            skip: 0,
            limit: 200
        }
    },
    reducers: {
        setStatus: (state, action) => {
            state.status = action.payload;
            return state;
        },
        setData: (state, action) => {
            state.data = action.payload;
            return state;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        setMessage: (state, action) => {
            state.mess = action.payload;
        },
        deleteFilm: (state, action) => {
            const idDelete = action.payload;
            state.data = state.data.filter(it => it.id !== idDelete);

            return state;
        },
        changeStatusFilm: (state, action) => {
            const { id, status } = action.payload;
            state.data = state.data.map(it => {
                if (it.id == id) {
                    it.status = status
                }
                return it;
            });
            return state;
        },

        resetState: () => {
            return {
                data: [],
                status: enumStatusLoading.NONE,
                mess: '',
                filter: {
                    skip: 0,
                    limit: 200
                }
            }
        }
    },

});
export const {
    setStatus,
    setData,
    setFilter,
    setMessage,
    deleteFilm,
    changeStatusFilm,
    resetState
} = ManagerMovieShowTimes.actions



export default ManagerMovieShowTimes.reducer;
