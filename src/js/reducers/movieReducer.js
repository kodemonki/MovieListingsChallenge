import { deepClone } from "../utils/deepClone.js";

const movieReducer = (
  state = {
    movies : []
  },
  action
) => {
  let newState = state;
  switch (action.type) {
    case "GET_MOVIES_RESPONSE":
      //////////////////////////////
      // GET_FIRST_MOVIES_RESPONSE
      //////////////////////////////
      // This is the first call to the
      // api, which enables us to
      // get the total number of pages
      // for the next Action
      //////////////////////////////
      newState = deepClone(state);
      newState.usedGenres = [];
      newState.movies = [];
      // this creates a list of used genres,
      // so only relevant ones are displayed
      for (let i = 0; i < action.payload.length; i++) {
        newState.movies.push(action.payload[i]);
        for (
          let n = 0;
          n < action.payload[i].genre_ids.length;
          n++
        ) {
          newState.usedGenres[
            action.payload[i].genre_ids[n]
          ] = true;
        }
      }
      break;
    case "GET_FIRST_MOVIE_ERROR":
      console.log("GET_FIRST_MOVIE_ERROR ", action.error);
      break;
    case "GET_REMAINING_MOVIES_ERROR":
      console.log("GET_REMAINING_MOVIES_ERROR ", action.error);
      break;
  }
  return newState;
};

export default movieReducer;
