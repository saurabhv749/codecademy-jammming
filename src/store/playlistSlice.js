import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    tracks: [],
  },
  reducers: {
    addTrack: (state, action) => {
      state.tracks.push(action.payload);
    },
    removeTrack: (state, action) => {
      state.tracks = state.tracks.filter(
        (track) => track.id !== action.payload
      );
    },
    removeAllTracks: (state, action) => {
      state.tracks = [];
    },
  },
});
// action creator
export const { addTrack, removeTrack, removeAllTracks } = playlistSlice.actions;

export default playlistSlice.reducer;
