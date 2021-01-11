import {MuiTabProps} from "../interfaces/Utils";

export const muiTabProps: MuiTabProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
};
