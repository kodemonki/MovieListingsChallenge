import { deepClone } from "../utils/deepClone.js";

const movieReducer = (
  state = {
    initialLoad: false, // if the first page of movies is loaded
    remainingLoad: false, // if the remaining pages of movies are loaded
    totalPages: null,
    pagesLoaded: 0
  },
  action
) => {
  let newState = state;
  switch (action.type) {
    case "GET_FIRST_MOVIES_RESPONSE":
      //////////////////////////////
      // GET_FIRST_MOVIES_RESPONSE
      //////////////////////////////
      // This is the first call to the
      // api, which enables us to
      // get the total number of pages
      // for the next Action
      //////////////////////////////
      newState = deepClone(state);
      newState.totalPages = action.payload.data.total_pages;
      newState.pagesLoaded = newState.pagesLoaded + 1;
      newState.initialLoad = true;
      newState.usedGenres = [];
      newState.movies = [];
      // this creates a list of used genres,
      // so only relevant ones are displayed
      for (let i = 0; i < action.payload.data.results.length; i++) {
        newState.movies.push(action.payload.data.results[i]);
        for (
          let n = 0;
          n < action.payload.data.results[i].genre_ids.length;
          n++
        ) {
          newState.usedGenres[
            action.payload.data.results[i].genre_ids[n]
          ] = true;
        }
      }
      break;
    case "GET_FIRST_MOVIES_ERROR":
      console.log("GET_FIRST_MOVIES_ERROR ", action.error);
      break;
    case "GET_REMAINING_MOVIES_RESPONSE":
      //////////////////////////////
      // GET_REMAINING_MOVIES_RESPONSE
      //////////////////////////////
      // This is the second call to the
      // apis, which enables us to
      // get the remaining pages
      //////////////////////////////
      newState = deepClone(state);
      newState.remainingLoad = true;
      newState.pagesLoaded = newState.pagesLoaded + 1;
      // this creates a list of used genres,
      // so only relevant ones are displayed
      for (let i = 0; i < action.payload.data.results.length; i++) {
        newState.movies.push(action.payload.data.results[i]);
        for (
          let n = 0;
          n < action.payload.data.results[i].genre_ids.length;
          n++
        ) {
          newState.usedGenres[
            action.payload.data.results[i].genre_ids[n]
          ] = true;
        }
      }
      break;
    case "GET_REMAINING_MOVIES_ERROR":
      console.log("GET_REMAINING_MOVIES_ERROR ", action.error);
      break;
  }
  return newState;
};

export default movieReducer;
