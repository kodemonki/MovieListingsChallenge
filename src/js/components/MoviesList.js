import React from "react";

export default class MoviesList extends React.Component {
  getMovies() {
    if (this.props.movies !== undefined) {
      const items = this.props.movies.map((movie, i) => {
        return (
          <div className="Movie" key={i}>
            <p>{movie.title}</p>
          </div>
        );
      });
      return items;
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <h1>MoviesList</h1>
        {this.getMovies()}
      </div>
    );
  }
}
