import { deepClone } from "../utils/deepClone.js";

const genreReducer = (state = { doubleCheckedGenre: false }, action) => {
  let newState = state;
  switch (action.type) {
    case "GET_GENRE_RESPONSE":
      //////////////////////////////
      // GET_GENRE_RESPONSE
      //////////////////////////////
      // This sets the genre list
      // from the api data
      //////////////////////////////
      newState = deepClone(state);
      newState.genres = action.payload.data.genres;
      for (let i = 0; i < newState.genres.length; i++) {
        newState.genres[i].checked = false;
      }

      break;
    case "SET_GENRE_ACTION":
      //////////////////////////////
      // SET_GENRE_ACTION
      //////////////////////////////
      // This sets the genre list
      // checked values from the
      // input form
      //////////////////////////////
      newState = deepClone(state);
      for (let i = 0; i < newState.genres.length; i++) {
        if (newState.genres[i].name == action.payload.name) {
          newState.genres[i].checked = action.payload.checked;
          break;
        }
      }
      break;
    case "GET_GENRE_ERROR":
      console.log("GET_GENRE_ERROR ", action.error);
      break;
  }
  return newState;
};

export default genreReducer;
