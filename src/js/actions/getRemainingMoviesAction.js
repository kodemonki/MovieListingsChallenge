import axios from "axios";

export function getRemainingMoviesAction(totalPages) {
  return dispatch => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=6a01a1076f453b71cbbe77c2d146144b&language=en-US&page=";
    let pageNumber = 2;

    for (let pageNumber = 2; pageNumber <= totalPages; pageNumber++) {
      axios
        .get(url + pageNumber)
        .then(function(response) {
          dispatch({
            type: "GET_REMAINING_MOVIES_RESPONSE",
            payload: response
          });
        })
        .catch(function(error) {
          dispatch({ type: "GET_REMAINING_MOVIES_ERROR", payload: error });
        });
    }
  };
}
