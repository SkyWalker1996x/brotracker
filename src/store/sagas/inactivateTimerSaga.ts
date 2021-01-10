import { put, select, takeEvery } from 'redux-saga/effects';
import { addTask, clearCurrentTask, finishTask } from '../actions';
import { INACTIVATE_TIMER } from '../types';
import { State } from '../../interfaces';

const getCurrentTask = (state: State) => state.currentTask;

function* workerInactivateTimer() {
  yield put(finishTask());
  const payload = yield select(getCurrentTask);
  yield put(addTask(payload));
  yield put(clearCurrentTask());
}

export function* watcherInactivateTimer() {
  yield takeEvery(INACTIVATE_TIMER, workerInactivateTimer);
}
