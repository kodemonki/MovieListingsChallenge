import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Dumb } from "../components/Dumb";
import { dumbAction } from "../actions/dumbAction";

class App extends React.Component {
  render() {
    this.props.consoleLog('React dispatch');

    return <Router>
      <div className="App">
        <h1>react-redux-webpack-babel-sass-boilerplate</h1>
        <Dumb initialised={this.props.initialised}/>
      </div>
    </Router>;
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.dumbReducer.initialised
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    consoleLog: (message) => {
      dispatch(dumbAction(message))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
