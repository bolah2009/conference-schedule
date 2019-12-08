import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { loadState, saveState } from './localStorage';

const loggerMiddleware = createLogger();
const configureStore = () => {
  const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );

  store.subscribe(() => {
    saveState({
      ...store.getState(),
    });
  });

  return store;
};

export default configureStore;
