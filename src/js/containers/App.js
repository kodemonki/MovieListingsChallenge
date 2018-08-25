import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import RatingFilter from "../components/RatingFilter";
import GenreFilter from "../components/GenreFilter";
import MoviesList from "../components/MoviesList";

import { getGenreAction } from "../actions/getGenreAction";
import { setGenreAction } from "../actions/setGenreAction";
import { setRatingAction } from "../actions/setRatingAction";
import { getMoviesAction } from "../actions/getMoviesAction";

class App extends React.Component {
  //////////////////////////////
  // componentDidMount
  //////////////////////////////
  // This gets the genre data
  // and gets the first page
  // of the movies list
  //////////////////////////////
  componentDidMount() {
    this.props.getGenreAction();
    this.props.getMoviesAction();
  }
  //////////////////////////////
  // render
  //////////////////////////////
  // once the first page is
  // loaded, it starts the
  // remaing pages load sequence
  //////////////////////////////
  render() {
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
            usedGenres={this.props.usedGenres}
          />
          <MoviesList
            movies={this.props.movies}
            minimumRating={this.props.minimumRating}
            genres={this.props.genres}
          />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    genres: state.genreReducer.genres,
    movies: state.movieReducer.movies,
    usedGenres: state.movieReducer.usedGenres,
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
    getMoviesAction: payload => {
      dispatch(getMoviesAction(payload));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
