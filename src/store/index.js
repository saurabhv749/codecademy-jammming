import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import audioPlayerReducer from "./audioPlayerSlice";
import playlistReducer from "./playlistSlice";
import searchResultsReducer from "./searchResultSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    audioPlayer: audioPlayerReducer,
    playlist: playlistReducer,
    searchResults: searchResultsReducer,
  },
});

export default store;
