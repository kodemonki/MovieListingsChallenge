import React from "react";

export default class MoviesList extends React.Component {
  checkGenre(movie) {
    if (movie.genre_ids === undefined) {
      return false;
    } else {
      let checked = false;
      for (let i = 0; i < movie.genre_ids.length; i = i + 1) {
        for (let n = 0; n < this.props.genres.length; n = n + 1) {
          if (
            this.props.genres[n].id == movie.genre_ids[i] &&
            this.props.genres[n].checked == true
          ) {
            checked = true;
            break;
          }
        }
        if (checked == true) {
          break;
        }
      }
      if (checked) {
        return true;
      } else {
        return false;
      }
    }
  }
  checkRating(movie) {
    if (Number(movie.vote_average) >= Number(this.props.minimumRating)) {
      return true;
    } else {
      return false;
    }
  }
  getGenres(movie) {
    let str = "";
    for (let i = 0; i < movie.genre_ids.length; i = i + 1) {
      for (let n = 0; n < this.props.genres.length; n = n + 1) {
        if (this.props.genres[n].id == movie.genre_ids[i]) {
          str += this.props.genres[n].name + " ";
          break;
        }
      }
    }
    return str;
  }
  checkPosterPath(path) {
    if (path == null) {
      return (
        <img
          src={
            "https://dummyimage.com/200x300/000000/fff.png&text=file+not+found"
          }
        />
      );
    } else {
      return <img src={"https://image.tmdb.org/t/p/w200" + path} />;
    }
  }
  getMovies() {
    if (this.props.movies != undefined) {
      const items = this.props.movies.map((movie, i) => {
        if (this.checkRating(movie)) {
          if (this.checkGenre(movie)) {
            return (
              <div className="Movie" key={i}>
                <p>
                  <strong>{movie.title}</strong>
                </p>
                <p>{this.getGenres(movie)}</p>
                {this.checkPosterPath(movie.poster_path)}
              </div>
            );
          }
        }
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
