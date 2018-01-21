const actionTypes = require('./ActionTypes');

default_state = {container: 'home', course: 'none'};

module.exports = (state = default_state, action) => {
  let copy = Object.assign({}, state);
  console.log('1', copy);
  let container = copy['container'] ? copy['container'] : 'home';
  let course = copy['course'] ? copy['course'] : 'none';
  Object.keys(actionTypes).forEach((key) => {
    if (actionTypes[key].type === action.type.type) {
      // console.log('got match', actionTypes[key], action.course);
      copy = Object.assign(copy, {container: actionTypes[key].text, course: action.course});
    }
  });
  return copy;
  // return {container: 'thing', course: 'wowwowow'}; // state;
  // TODO: This
  // if (action.type === INCREMENT.type) {
  //   return Object.assign(copy, {"a": val + 1});
  // } else if (action.type === DECREMENT.type) {
  //   return Object.assign(copy, {"a": val - 1});
  // } else {
  //   return state;
  // }
};