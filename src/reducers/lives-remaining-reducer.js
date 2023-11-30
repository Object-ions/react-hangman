const livesRemainingReducer = (state = 6, action) => {
  switch (action.type) {
    case "DECREMENT_LIFE":
      return state > 0 ? state - 1 : 0;
    default:
      return state;
  }
};

export default livesRemainingReducer;

// const reducer = (state = { livesRemaining: 6 }, action) => {
//   const { livesRemaining } = action;

//   switch (action.type) {
//     case "DECREMENT_LIFE":
//       return Object.assign({}, state, {
//         livesRemaining: livesRemaining - 1,
//       });
//   }
// };

// export default reducer;
