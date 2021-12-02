import { configureStore, combineReducers } from "@reduxjs/toolkit";
import subRedditReducer from "./subRedditSlice";
import redditReducer from "./redditSlice";

export default configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});
