import { delay, put, select, takeEvery } from 'redux-saga/effects';
import { ACTIVATE_TIMER } from '../types';
import { startTask, updateTimeSpend } from '../actions';
import { State } from '../../interfaces';

const getTimerActive = (state: State) => state.activeTimer;
const getTaskTimeStart = (state: State) => state.currentTask.timeStart;

function* workerActivateTimer() {
  const taskTimeStart = yield select(getTaskTimeStart);
  if (taskTimeStart === 0) {
    yield put(startTask());
  }

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

export function* watcherActivateTimer() {
  yield takeEvery(ACTIVATE_TIMER, workerActivateTimer);
}
