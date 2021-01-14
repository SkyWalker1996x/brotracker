import { put, select, takeEvery } from 'redux-saga/effects';
import { ACTIVATE_TIMER } from '../types';
import { startTask } from '../actions/currentTaskActions';
import { State } from '../../interfaces/Store';
import { saveToLocalStorage } from '../../utils/localStorageUtils';

const getState = (state: State) => state;
const getTaskTimeStart = (state: State) => state.currentTask.timeStart;

function* workerActivateTimer() {
  const taskTimeStart = yield select(getTaskTimeStart);
  if (taskTimeStart === 0) {
    yield put(startTask());
  }
  const state = yield select(getState);
  saveToLocalStorage(state);
}

export function* watcherActivateTimer() {
  yield takeEvery(ACTIVATE_TIMER, workerActivateTimer);
}
