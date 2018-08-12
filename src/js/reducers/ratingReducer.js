import { deepClone } from "../utils/deepClone.js";

const initialState = {
  minimumRating: 3
};

const ratingReducer = (state = initialState, action) => {
  let newState = deepClone(state);
  switch (action.type) {
    case "SET_RATING_ACTION":
      //console.log("SET_RATING_ACTION " + action.payload);
      newState.minimumRating = Number(action.payload);
      break;
  }
  return newState;
};

export default ratingReducer;
