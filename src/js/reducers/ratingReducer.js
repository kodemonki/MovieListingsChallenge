const initialState = {
  minimumRating: 0
};

const ratingReducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "SET_RATING_ACTION":
      //console.log("SET_RATING_ACTION " + action.payload);
      newState.minimumRating = action.payload;
      break;
  }
  return newState;
};

export default ratingReducer;
