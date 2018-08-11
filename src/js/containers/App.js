import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Dumb } from "../components/Dumb";
import IntervalFilter from "../components/IntervalFilter";
import GenreFilter from "../components/GenreFilter";
import { dumbAction } from "../actions/dumbAction";
import { getGenreAction } from "../actions/getGenreAction";

class App extends React.Component {
  componentDidMount() {
    this.props.getGenreAction();
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <div className="App">
          <h1>MovieListingsChallenge</h1>
          <IntervalFilter />
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
    genres: state.genreReducer.genres
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGenreAction: payload => {
      dispatch(getGenreAction(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
