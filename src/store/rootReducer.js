import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";
import postPageReducer from "./postPages/reducer";

const reducer = combineReducers({
  feed: postsReducer,
  postPage: postPageReducer,
  // etc.
});

export default reducer;