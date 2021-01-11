import * as actionTypes from '../actions';
const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    // return {
    //   counter: state.counter + 1,
    // };
    case actionTypes.DECREMENT:
      // console.log('DECREMENT Clicked');
      // console.log('DECREMENT Action Properties', action);
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADD:
      //  console.log('ADD Clicked');
      //  console.log('ADD Action Properties', action);
      return {
        ...state,
        counter: state.counter + action.val,
      };

    case actionTypes.SUBTRACT:
      //  console.log('SUBTRACT Clicked');
      //  console.log('SUBTRACT Action Properties', action);
      return {
        ...state,
        counter: state.counter - action.val,
      };

    default:
      return state;
  }
};

export default reducer;
