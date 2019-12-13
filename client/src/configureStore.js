import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

let middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  const loggerMiddleware = require('redux-logger').createLogger();
  middleware = [...middleware, loggerMiddleware];
}

const configureStore = () => {
  const store = createStore(rootReducer, loadState(), applyMiddleware(...middleware));

  store.subscribe(() => {
    saveState({
      ...store.getState(),
    });
  });

  return store;
};

export default configureStore;
