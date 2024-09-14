import { createSlice } from "@reduxjs/toolkit";

const audioPlayerSlice = createSlice({
  name: "audioPlayer",
  initialState: {
    track: null,
  },
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
  },
});
// action creator
export const { setTrack } = audioPlayerSlice.actions;

export default audioPlayerSlice.reducer;
