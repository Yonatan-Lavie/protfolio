import React from 'react';
import ReactDom from 'react-dom';

// redux && redux-persist
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
// import { configureStore } from './redux/store';
import store from './redux/store';

// react-router
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// const store = configureStore();
const persistor = persistStore(store);

ReactDom.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
