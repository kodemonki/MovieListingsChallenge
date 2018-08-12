export function checkGenreAction(data) {
  //return { type: "CHECK_GENRE_ACTION", payload: data };
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: "CHECK_GENRE_ACTION", payload: data });
    }, 0);
  };
}
