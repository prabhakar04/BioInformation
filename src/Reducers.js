const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_SAVE":
      state = action.data;
      return state;
    default:
      return state;
  }
};
export default reducer;
