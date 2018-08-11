import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import dumbReducer from "./reducers/dumbReducer";
import intervalReducer from "./reducers/intervalReducer";
import genreReducer from "./reducers/genreReducer";

export default createStore(
  combineReducers({
    dumbReducer,
    intervalReducer,
    genreReducer
  }),
  {},
  applyMiddleware(createLogger(), thunk)
);
