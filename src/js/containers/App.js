import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import RatingFilter from "../components/RatingFilter";
import GenreFilter from "../components/GenreFilter";
import MoviesList from "../components/MoviesList";

import { getGenreAction } from "../actions/getGenreAction";
import { setGenreAction } from "../actions/setGenreAction";
import { setRatingAction } from "../actions/setRatingAction";
import { getFirstMoviesAction } from "../actions/getFirstMoviesAction";
import { getRemainingMoviesAction } from "../actions/getRemainingMoviesAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenreAction();
    this.props.getFirstMoviesAction();
  }
  render() {
    if (this.props.initialLoad === true) {
      if (this.props.remainingLoad === false) {
        this.props.getRemainingMoviesAction(this.props.totalPages);
      }
    }
    return (
      <Router>
        <div className="App">
          <h1>MovieListingsChallenge</h1>
          <RatingFilter
            minimumRating={this.props.minimumRating}
            setRatingAction={this.props.setRatingAction}
          />
          <GenreFilter
            getGenreAction={this.props.getGenreAction}
            setGenreAction={this.props.setGenreAction}
            genres={this.props.genres}
          />
          <MoviesList movies={this.props.movies} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    genres: state.genreReducer.genres,
    movies: state.movieReducer.movies,
    initialLoad: state.movieReducer.initialLoad,
    remainingLoad: state.movieReducer.remainingLoad,
    totalPages: state.movieReducer.totalPages,
    minimumRating: state.ratingReducer.minimumRating
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getGenreAction: payload => {
      dispatch(getGenreAction(payload));
    },
    setGenreAction: payload => {
      dispatch(setGenreAction(payload));
    },
    setRatingAction: payload => {
      dispatch(setRatingAction(payload));
    },
    getFirstMoviesAction: payload => {
      dispatch(getFirstMoviesAction(payload));
    },
    getRemainingMoviesAction: payload => {
      dispatch(getRemainingMoviesAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
