import { put, select, takeEvery } from 'redux-saga/effects';
import { clearCurrentTask, finishTask } from '../actions/currentTaskActions';
import { addTask } from '../actions/tasksActions';
import { INACTIVATE_TIMER } from '../types';
import { State } from '../../interfaces/Store';
import { saveToLocalStorage } from '../../utils/localStorageUtils';

const getCurrentTask = (state: State) => state.currentTask;
const getState = (state: State) => state;

function* workerInactivateTimer() {
  yield put(finishTask());
  const payload = yield select(getCurrentTask);
  yield put(addTask(payload));
  yield put(clearCurrentTask());
  const state = yield select(getState);
  yield saveToLocalStorage(state);
}

export function* watcherInactivateTimer() {
  yield takeEvery(INACTIVATE_TIMER, workerInactivateTimer);
}
