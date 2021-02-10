import { createStore, Store } from "redux";
import rootReducer from './ducks/rootReducers';
import { PlayersState } from './ducks/players/types';

export interface ApplicationState{
    playerState: PlayersState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;