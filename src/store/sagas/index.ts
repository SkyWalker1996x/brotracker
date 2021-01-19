import { all } from 'redux-saga/effects';
import { watcherActivateTimer } from './activateTimerSaga';
import { watcherInactivateTimer } from './inactivateTimerSaga';
import {watcherSetName} from "./setNameSaga";

export function* rootSaga() {
  yield all([watcherActivateTimer(), watcherInactivateTimer(), watcherSetName()]);
}
