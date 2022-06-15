import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
/**
 * buat store: state global
 * menyimpan berbagai slice reducer
 */
const store  = configureStore({
    reducer : {
        movies : moviesReducer,
    }
})

export default store;