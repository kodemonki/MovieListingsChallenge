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
        return false;
      } else {
        return true;
      }
    }
  }
  checkRating(movie) {
    if (Number(movie.vote_average) <= Number(this.props.minimumRating)) {
      return true;
    } else {
      return false;
    }
  }
  getGenres(movie) {
    var str = "";
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
  getMovies() {
    if (this.props.pagesLoaded == this.props.totalPages) {
      const items = this.props.movies.map((movie, i) => {
        if (this.checkRating(movie)) {
          return null;
        } else if (this.checkGenre(movie)) {
          return null;
        } else {
          return (
            <div className="Movie" key={i}>
              <p>{movie.title}</p>
              <p>{movie.vote_average}</p>
              <p>{this.getGenres(movie)}</p>
            </div>
          );
        }
      });
      return items;
    } else {
      return null;
    }
  }
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>MoviesList</h1>
        {this.getMovies()}
      </div>
    );
  }
}
