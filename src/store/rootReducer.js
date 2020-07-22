import { combineReducers } from "redux";
import postsReducer from "./posts/reducer";

const reducer = combineReducers({
  posts: postsReducer,
  // etc.
});

export default reducer;