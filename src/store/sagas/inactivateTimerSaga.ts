import { put, select, takeEvery } from 'redux-saga/effects';
import { clearCurrentTask, finishTask } from '../actions/currentTaskActions';
import { addTask } from '../actions/tasksActions';
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
