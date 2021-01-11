import {ClearCurrentTask, FinishTask, SetTaskName, StartTask, UpdateTimeSpend} from "../../interfaces/Store";
import {CLEAR_CURRENT_TASK, FINISH_TASK, SET_TASK_NAME, START_TASK, UPDATE_TIME_SPEND} from "../types";
import {v4 as uuidv4} from "uuid";

export const setTaskName: SetTaskName = (name) => {
    return {
        type: SET_TASK_NAME,
        payload: name,
    };
};



export const startTask: StartTask = () => {
    return {
        type: START_TASK,
        payload: {
            id: uuidv4(),
            timeStart: Date.now(),
        },
    };
};

export const finishTask: FinishTask = () => {
    return {
        type: FINISH_TASK,
        payload: Date.now(),
    };
};

export const clearCurrentTask: ClearCurrentTask = () => {
    return {
        type: CLEAR_CURRENT_TASK,
    };
};

export const updateTimeSpend: UpdateTimeSpend = () => {
    return {
        type: UPDATE_TIME_SPEND,
        payload: Date.now(),
    };
};
