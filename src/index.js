import React from "react";
import ReactDOM from "react-dom";
import { store } from "./createStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor } from "./createStore";

import App from "./Components/App";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);