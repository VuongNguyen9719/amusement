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
        }
    },

});
export const {
    setStatus,
    setData,
    setFilter,
    setMessage,
} = ManagerMovieShowTimes.actions



export default ManagerMovieShowTimes.reducer;
