const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App.react');

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

import configureStore from './configureStore';
let { store, persistor } = configureStore();

function makeApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App store={store} />
      </PersistGate>
    </Provider>
  );
}

ReactDOM.render(
  makeApp(),
  document.getElementById('app')
);