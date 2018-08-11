import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RatingFilter from "../components/RatingFilter";
import GenreFilter from "../components/GenreFilter";
import { getGenreAction } from "../actions/getGenreAction";
import { setRatingAction } from "../actions/setRatingAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenreAction();
  }
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
    minimumRating: state.ratingReducer.minimumRating
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGenreAction: payload => {
      dispatch(getGenreAction(payload));
    },
    setRatingAction: payload => {
      dispatch(setRatingAction(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
