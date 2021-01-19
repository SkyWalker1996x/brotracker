import { select, takeEvery } from 'redux-saga/effects';
import { State } from '../../interfaces/Store';
import { saveToLocalStorage } from '../../utils/localStorageUtils';
import { SET_TASK_NAME } from '../types';

const getState = (state: State) => state;

function* workerSetName() {
  const state = yield select(getState);
  saveToLocalStorage(state);
}

export function* watcherSetName() {
  yield takeEvery(SET_TASK_NAME, workerSetName);
}
