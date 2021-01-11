import * as actionTypes from '../actions';
const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      console.log('STORE_RESULT Clicked');
      //     console.log(...state);
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.result}),
      };

    case actionTypes.DELETE_RESULT:
      // const id =2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updatedArray = state.results.filter(
        (result, index) => result.id !== action.resultElId
      );
      return {...state, results: updatedArray};

    default:
      return state;
  }
};

export default reducer;
