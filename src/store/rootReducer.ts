import { combineReducers } from "redux";
import playerReducer from "./players";

const rootReducer = combineReducers({
  playerReducer,
});

export default rootReducer;
