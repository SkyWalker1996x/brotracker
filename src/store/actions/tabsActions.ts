import {SetActiveTab} from "../../interfaces";
import {SET_ACTIVE_TAB} from "../types";

export const setActiveTab: SetActiveTab = (tab) => {
    return {
        type: SET_ACTIVE_TAB,
        payload: tab,
    };
};
