import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  originals: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectedRecommended = (state) => state.movie.recommend;
export const selectedNewDisney = (state) => state.movie.newDisney;
export const selectedOriginals = (state) => state.movie.originals;
export const selectedTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
