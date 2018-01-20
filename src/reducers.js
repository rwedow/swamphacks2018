import {INCREMENT, DECREMENT} from './ActionTypes';

export default (state = 0, action) => {
  let copy = Object.assign({}, state);
  let val = copy['location'] ? copy['location'] : 'home';
  return Object.assign(copy, {'location': val});
  // TODO: This
  // if (action.type === INCREMENT.type) {
  //   return Object.assign(copy, {"a": val + 1});
  // } else if (action.type === DECREMENT.type) {
  //   return Object.assign(copy, {"a": val - 1});
  // } else {
  //   return state;
  // }
};