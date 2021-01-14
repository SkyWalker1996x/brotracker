export const extractActiveTab = (pathname: string) => {
    switch (pathname) {
        case '/tasks_chart':
            return 'TASKS_CHART';
        case '/':
            return 'TABLE_LOG';
        default:
            return 'TABLE_LOG';
    }
};
