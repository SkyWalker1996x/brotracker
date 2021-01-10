import {ActivateTimer, InactivateTimer} from "../../interfaces";
import {ACTIVATE_TIMER, INACTIVATE_TIMER} from "../types";

export const activateTimer: ActivateTimer = () => {
    return {
        type: ACTIVATE_TIMER,
    };
};

export const inactivateTimer: InactivateTimer = () => {
    return {
        type: INACTIVATE_TIMER,
    };
};
