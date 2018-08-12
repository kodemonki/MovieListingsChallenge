import axios from "axios";
//////////////////////////////
// getGenreAction
//////////////////////////////
// This loads the genre data
//////////////////////////////
export function getGenreAction() {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=6a01a1076f453b71cbbe77c2d146144b&language=en-US"
      )
      .then(function(response) {
        dispatch({ type: "GET_GENRE_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_GENRE_ERROR", payload: error });
      });
  };
}
