export const SET_LOCATION = 'SET_LOCATION';
export const SET_HISTORY = 'SET_HISTORY';

export const setLocation = (location) => ({ type: SET_LOCATION, payload: location });
export const setHistory = (history) => ({ type: SET_HISTORY, payload: history });
