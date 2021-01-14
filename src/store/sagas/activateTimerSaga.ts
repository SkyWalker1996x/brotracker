import { put, select, takeEvery } from 'redux-saga/effects';
import { ACTIVATE_TIMER } from '../types';
import { startTask } from '../actions/currentTaskActions';
import { State } from '../../interfaces/Store';

const getTaskTimeStart = (state: State) => state.currentTask.timeStart;

function* workerActivateTimer() {
  const taskTimeStart = yield select(getTaskTimeStart);
  if (taskTimeStart === 0) {
    yield put(startTask());
  }
}

export function* watcherActivateTimer() {
  yield takeEvery(ACTIVATE_TIMER, workerActivateTimer);
}
