const count = 1;
const Reducer = (state = count, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
};

export default Reducer;
