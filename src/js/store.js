import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import ratingReducer from "./reducers/ratingReducer";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";

export default createStore(
  combineReducers({
    ratingReducer,
    genreReducer,
    movieReducer
  }),
  {},
  applyMiddleware(thunk)
);
