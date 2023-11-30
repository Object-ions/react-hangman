const reducer = (state = true, action) => {
  // deconstruct the action keys here. Ex: names, location, issue, id;
  // const { names, location, issue, id } = action;
  switch (action.type) {
    case "TOGGLE_GAME_OVER_STATUS":
      return !state;
    default:
      return state;
  }
};

export default reducer;
