import { createSlice } from "@reduxjs/toolkit";

const ManagerFilm = createSlice({
    name: "ManagerFilm",
    initialState: {
        data: []
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },

    },

});
export const { setData } = ManagerFilm.actions
export default ManagerFilm.reducer;
