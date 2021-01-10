import { all } from 'redux-saga/effects';
import { watcherActivateTimer } from './activateTimerSaga';
import { watcherInactivateTimer } from './inactivateTimerSaga';

export function* rootSaga() {
  yield all([watcherActivateTimer(), watcherInactivateTimer()]);
}
