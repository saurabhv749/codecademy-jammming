import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
    accessToken: null,
  },
  reducers: {
    setProfile: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
  },
});
// action creator
export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;
