import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { PersistGate } from "redux-persist/es/integration/react"; // eslint-disable-line import/no-unresolved
// import reducers from "./reducers";
import App from "./Components/App";
import { store } from "./createStore";

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["videos", "bookmarks"],
// };
// const persistReducers = persistReducer(persistConfig, reducers);
// export const middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(...middlewares))
// );
// const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

// ReactDOM.render(
//   <Provider store={store}>
//     {/* <PersistGate persistor={persistor} loading={null}> */}
//     <App />
//     {/* </PersistGate> */}
//   </Provider>,
//   document.querySelector("#root")
// );
