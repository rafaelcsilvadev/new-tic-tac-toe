import { createStore, Store } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "players",
  storage,
};

const persist = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(persist);
export const persistor = persistStore(store);
