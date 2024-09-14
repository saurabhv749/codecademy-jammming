import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: {
    tracks: [],
  },
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    removeAllTracks: (state, action) => {
      state.tracks = [];
    },
  },
});
// action creator
export const { setTracks, removeAllTracks } = searchResultSlice.actions;

export default searchResultSlice.reducer;
