import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/es/integration/react'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['videos'],
}
const persistReducers = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
                         
const store = createStore(persistReducers, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null} >
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector('#root'),
);
