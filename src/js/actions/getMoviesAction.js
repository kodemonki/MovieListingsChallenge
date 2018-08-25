import axios from "axios";
//////////////////////////////
// getFirstMoviesAction
//////////////////////////////
// This loads the first page of
// api data
//////////////////////////////
export function getMoviesAction() {
  let pages = [];
  return dispatch => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=6a01a1076f453b71cbbe77c2d146144b&language=en-US&page=1"
      )
      .then(function(response) {
        pages[0] = response.data.results;
        const url =
          "https://api.themoviedb.org/3/movie/now_playing?api_key=6a01a1076f453b71cbbe77c2d146144b&language=en-US&page=";
        let totalPages = Number(response.data.total_pages);
        for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
          axios
            .get(url + pageNumber)
            .then(function(response) {
              pages[Number(response.data.page)] = response.data.results;
              if(pageNumber == totalPages){
                let movies = [];
                let merged = [].concat.apply([], pages);
                dispatch({ type: "GET_MOVIES_RESPONSE", payload: merged });
              }
            })
            .catch(function(error) {
              dispatch({ type: "GET_REMAINING_MOVIES_ERROR", payload: error });
            });
        }
      })
      .catch(function(error) {
        dispatch({ type: "GET_FIRST_MOVIE_ERROR", payload: error });
      });
  };
}
