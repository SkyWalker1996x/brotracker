import {AddTask, DeleteTask} from "../../interfaces";
import {ADD_TASK, DELETE_TASK} from "../types";

export const addTask: AddTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task,
    };
};

export const deleteTask: DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id,
    };
};
