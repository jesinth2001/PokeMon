import { configureStore } from "@reduxjs/toolkit";
import pokeReducer from "./slices/pokeSlice"
import pokeDetailReducer from "./slices/pokeDetailSlice";


export const store=configureStore({
    reducer:{
        pokeLists:pokeReducer,
        pokeDetails:pokeDetailReducer,
    }
});