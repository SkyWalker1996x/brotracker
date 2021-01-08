import { takeEvery, put, select, delay } from 'redux-saga/effects';
import { ACTIVATE_TIMER, INACTIVATE_TIMER } from './types';
import {
  addTask,
  clearCurrentTask,
  finishTask,
  startTask,
  updateTimeSpend,
} from './actions';

const getTimerActive = (state: any) => state.activeTimer;
const getCurrentTask = (state: any) => state.currentTask;

function* workerActivateTimer() {
  yield put(startTask());
  while (true) {
    const timerActive = yield select(getTimerActive);
    if (timerActive) {
      yield put(updateTimeSpend());
    }
    if (!timerActive) {
      break;
    }
    yield delay(1000);
  }
}

function* workerInactivateTimer() {
  yield put(finishTask());
  const payload = yield select(getCurrentTask);
  yield put(addTask(payload));
  yield put(clearCurrentTask());
}

export function* watcherActivateTimer() {
  yield takeEvery(ACTIVATE_TIMER, workerActivateTimer);
}

export function* watcherInactivateTimer() {
  yield takeEvery(INACTIVATE_TIMER, workerInactivateTimer);
}
