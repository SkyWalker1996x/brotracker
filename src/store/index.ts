import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { watcherActivateTimer, watcherInactivateTimer } from './sagas';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorageUtils';
import { ACTIVATE_TIMER } from './types';

const persistedState = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

sagaMiddleware.run(watcherActivateTimer);
sagaMiddleware.run(watcherInactivateTimer);

if (store.getState().activeTimer) {
  store.dispatch({ type: ACTIVATE_TIMER, payload: '' });
}
