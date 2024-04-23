import { createSlice } from "@reduxjs/toolkit";

    const initialState = []

    const pokeDetailSlice =createSlice( {
            name:'pokeDetails',
            initialState,
            reducers:{
                setPokeDetails: (state, action) => {
                    state.push(action.payload)
                }
            }
        })

export const { setPokeDetails } = pokeDetailSlice.actions;
export const selectAllDetail =(state) => state.pokeDetails;
export default pokeDetailSlice.reducer;