import { deepClone } from "../utils/deepClone.js";

const movieReducer = (
  state = {
    initialLoad: false,
    remainingLoad: false,
    totalPages: null,
    pagesLoaded: 0
  },
  action
) => {
  let newState = deepClone(state);
  switch (action.type) {
    case "GET_FIRST_MOVIES_RESPONSE":
      //console.log("GET_MOVIES_RESPONSE ", action);
      newState.totalPages = action.payload.data.total_pages;
      newState.pagesLoaded = newState.pagesLoaded + 1;
      newState.initialLoad = true;
      newState.movies = action.payload.data.results;
      break;
    case "GET_FIRST_MOVIES_ERROR":
      console.log("GET_FIRST_MOVIES_ERROR ", action.error);
      break;
    case "GET_REMAINING_MOVIES_RESPONSE":
      //console.log("GET_REMAINING_MOVIES_RESPONSE");
      newState.remainingLoad = true;
      newState.pagesLoaded = newState.pagesLoaded + 1;
      for (let i = 0; i < action.payload.data.results.length; i++) {
        newState.movies.push(action.payload.data.results[i]);
      }
      break;
    case "GET_REMAINING_MOVIES_ERROR":
      console.log("GET_REMAINING_MOVIES_ERROR ", action.error);
      break;
  }
  return newState;
};

export default movieReducer;
