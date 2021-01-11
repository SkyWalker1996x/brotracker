import { LoadFromLocalStorage, SaveToLocalStorage } from '../interfaces/Utils';

export const loadFromLocalStorage: LoadFromLocalStorage = () => {
  try {
    const serializedStore = localStorage.getItem('state');
    if (serializedStore === null) return undefined;
    return JSON.parse(serializedStore);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const saveToLocalStorage: SaveToLocalStorage = (state) => {
  try {
    const serializedStore = JSON.stringify(state);
    localStorage.setItem('state', serializedStore);
  } catch (e) {
    console.log(e);
  }
};
