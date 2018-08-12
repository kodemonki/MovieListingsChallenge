import { deepClone } from "../utils/deepClone.js";

const genreReducer = (state = { doubleCheckedGenre: false }, action) => {
  //console.log(state);
  let newState = deepClone(state);
  switch (action.type) {
    case "GET_GENRE_RESPONSE":
      //console.log("GET_GENRE_RESPONSE ", action.payload);
      newState.genres = action.payload.data.genres;
      for (let i = 0; i < newState.genres.length; i++) {
        newState.genres[i].checked = false;
      }

      break;
    case "SET_GENRE_ACTION":
      //console.log("SET_GENRE_ACTION ", action.payload);
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
    case "CHECK_GENRE_ACTION":
      console.log("CHECK_GENRE_ACTION ", action.payload);
      let usedGenres = action.payload.usedGenres;
      let newGenresArray = [];
      let found = false;
      for (let genre in newState.genres) {
        for (let usedGenre in usedGenres) {
          if (newState.genres[genre].id == Number(usedGenre)) {
            newGenresArray.push(deepClone(newState.genres[genre]));
            found = true;
            break;
          }
        }
      }
      newState.genres = newGenresArray;
      newState.doubleCheckedGenre = true;
      break;
  }
  return newState;
};

export default genreReducer;
