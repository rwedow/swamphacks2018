import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers.js';

const persistConfig = {
  key: 'root',
  storage: storage
};

let pReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(pReducer);
  let persistor = persistStore(store);
  return { store, persistor };
};