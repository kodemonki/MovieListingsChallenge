import { deepClone } from "../utils/deepClone.js";

const initialState = {
  minimumRating: 3
};

const ratingReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case "SET_RATING_ACTION":
      //////////////////////////////
      // SET_RATING_ACTION
      //////////////////////////////
      // This is triggered by the
      // rating input form
      //////////////////////////////
      newState = deepClone(state);
      newState.minimumRating = Number(action.payload);
      break;
  }
  return newState;
};

export default ratingReducer;
