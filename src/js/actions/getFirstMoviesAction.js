import axios from "axios";

export function getFirstMoviesAction() {
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6a01a1076f453b71cbbe77c2d146144b&language=en-US&page=1"
      )
      .then(function(response) {
        dispatch({ type: "GET_FIRST_MOVIES_RESPONSE", payload: response });
      })
      .catch(function(error) {
        dispatch({ type: "GET_FIRST_MOVIES_ERROR", payload: error });
      });
  };
}
