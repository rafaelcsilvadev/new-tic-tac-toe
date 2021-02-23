import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./pages/app";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
  document.querySelector("#root")
);
