const actionTypes = require('./ActionTypes');

export default (state = {}, action) => {
  console.log('wut wut got here');
  let copy = Object.assign({}, state);
  console.log('1', copy);
  let container = copy['container'] ? copy['container'] : 'home';
  console.log('2');
  let course = copy['course'] ? copy['course'] : 'none';
  console.log(container, course);
  
  console.log('action', action);
  Object.keys(actionTypes).forEach((key) => {
    console.log(actionTypes[key].type, action.type.type);
    if (actionTypes[key].type === action.type.type) {
      console.log('got here');
      console.log('  ', action.type.type, action.course);
      copy = Object.assign(copy, {container: action.type.type, course: action.course});
      console.log(copy);
      return copy;
      // return {...state, container: action.type.type.text, course: action.course};
    } else {
      console.log('   no match', typeof actionTypes[key].type, action.type.type);
    }
  });
  return state;
  // TODO: This
  // if (action.type === INCREMENT.type) {
  //   return Object.assign(copy, {"a": val + 1});
  // } else if (action.type === DECREMENT.type) {
  //   return Object.assign(copy, {"a": val - 1});
  // } else {
  //   return state;
  // }
};