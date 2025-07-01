import { SET_LOCATION, SET_HISTORY } from './actions';

const initialState = {
  location: null,
  history: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.payload };
    case SET_HISTORY:
      return { ...state, history: action.payload };
    default:
      return state;
  }
}
