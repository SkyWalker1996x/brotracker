export const loadFromLocalStorage = () => {
    try {
        const serializedStore = localStorage.getItem('state');
        if (serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

export const saveToLocalStorage = (state: any) => {
    try {
        const serializedStore = JSON.stringify(state);
        localStorage.setItem('state', serializedStore);
    } catch (e) {
        console.log(e);
    }
};
