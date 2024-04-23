import { createSlice } from "@reduxjs/toolkit";

    const initialState = []

    const pokeSlice =createSlice( {
            name:'pokeLists',
            initialState,
            reducers:{
                setPokeList: (state, action) => {
                    return action.payload;
                }
            }
        })

export const { setPokeList } = pokeSlice.actions;
export const selectAll =(state) => state.pokeLists;
export default pokeSlice.reducer;