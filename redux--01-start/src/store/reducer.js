const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  //   if (action.type === 'INCREMENT') {
  //     return {
  //       counter: state.counter + 1,
  //     };
  //   }

  //   if (action.type === 'DECREMENT') {
  //     console.log('DECREMENT Clicked');
  //     return {
  //       counter: state.counter + 1,
  //     };
  //   }

  //   if (action.type === 'ADD') {
  //     return {
  //       counter: state.counter + 10,
  //     };
  //   }
  //   return state;
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      console.log('DECREMENT Clicked');
      console.log('DECREMENT Action Properties', action);
      return {
        counter: state.counter - 1,
      };

    case 'ADD':
        console.log('ADD Clicked');
        console.log('ADD Action Properties', action);
      return {
        counter: state.counter + action.val,
      };

    case 'SUBTRACT':
        console.log('SUBTRACT Clicked');
        console.log('SUBTRACT Action Properties', action);
      return {
        counter: state.counter - action.val,
      };

    default:
      return state;
  }
};

export default reducer;
