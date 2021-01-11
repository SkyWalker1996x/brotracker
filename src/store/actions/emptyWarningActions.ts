import {CloseWarning, ShowWarning} from "../../interfaces/Store";
import {CLOSE_WARNING, SHOW_WARNING} from "../types";

export const showWarning:ShowWarning = () => {
    return {
        type: SHOW_WARNING,
    };
};

export const closeWarning:CloseWarning = () => {
    return {
        type: CLOSE_WARNING,
    };
};
