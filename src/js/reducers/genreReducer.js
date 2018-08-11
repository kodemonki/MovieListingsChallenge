const initialState = {
  initialised: "initialised"
};

const genreReducer = (state = initialState, action) => {
  var newState = Object.assign({}, state);
  switch (action.type) {
    case "GET_GENRE_RESPONSE":
      console.log("GET_GENRE_RESPONSE ", action.payload);
      newState.genres = action.payload.data.genres;
      break;
    case "GET_GENRE_ERROR":
      console.log("GET_GENRE_ERROR ", action.error);
      break;
  }
  return newState;
};

export default genreReducer;
