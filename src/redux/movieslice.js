import { configureStore , createSlice } from "@reduxjs/toolkit";
import watchlist from "../compionents/watchlist";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {results: [],
        watchlist: []},
        reducers:{
            setResults: (state,action) =>{
                state.results =action.payload},
                addWatch :(state, action)=>{
                    if(!state.watchlist.find(x =>
                        x.imdbID === action.payload.imdbID
                    ))
                    state.watchlist.push(action.payload);
                },
                    removeWatch : (state,action) =>{
                        state.watchlist= state.watchlist.filter(n => x.imdbID !==action.payload);
                    },
                    setWatchlist :(state,action) =>
                    {state.watchlist =action,payload}
        }
});

export const {setResults, addWatch, removeWatch,setWatchlist} = movieSlice.action;
const store= configurationStore({ reducer: movieSlice.reducer});
export default store;