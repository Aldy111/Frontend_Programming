//import slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

const moviesSlice = createSlice({
    name : "Movies Slice",
    initialState : {
        movies : data
    },
    reducers : {
        addMovie(state,action) {
            state.movies.push(action.payload)
        },
        deleteMovie() {},
        updateMovies(state,action){
            state.movies = action.payload;
        }
    }
})

const moviesReducer = moviesSlice.reducer;
const {addMovie,deleteMovie,updateMovies} = moviesSlice.actions;


export default moviesReducer;
export {
    addMovie,
    deleteMovie,
    updateMovies
}