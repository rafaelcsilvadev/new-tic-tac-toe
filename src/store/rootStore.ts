import { combineReducers } from 'redux';
import playerReducer from "./players";

const rootStore = combineReducers({
    playerReducer
});

export default rootStore;