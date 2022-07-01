import { INCREMENT, DECREMENT, SET } from './actions';

export const initialState = { count: 0 };

// best practice : all the details how to get the state in the right format should happen in the reducer.
// If logic needs to change, there's only one place to change it.

// actions should only be the facts. Tell what happens as it happens, all the logic in the reducers

export const reducer = (state = initialState, action) => {
  // conditionals are easier to copy/paste/move versus switch statements
  if (action.type === INCREMENT) {
    return { count: state.count + 1 };
  }
  if (action.type === DECREMENT) {
    return { count: state.count - 1 };
  }
  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) };
  }
  return state;
};
