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
      } else {
        if (this.props.pagesLoaded == this.props.totalPages) {
          if (this.props.doubleCheckedGenre == false) {
            this.props.checkGenreAction({ usedGenres: this.props.usedGenres });
          }
        }
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
            usedGenres={this.props.usedGenres}
          />
          <MoviesList
            movies={this.props.movies}
            minimumRating={this.props.minimumRating}
            genres={this.props.genres}
            totalPages={this.props.totalPages}
            pagesLoaded={this.props.pagesLoaded}
            checkGenreAction={this.props.checkGenreAction}
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
    initialLoad: state.movieReducer.initialLoad,
    remainingLoad: state.movieReducer.remainingLoad,
    totalPages: state.movieReducer.totalPages,
    pagesLoaded: state.movieReducer.pagesLoaded,
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
