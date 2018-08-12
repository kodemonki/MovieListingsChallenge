import React from "react";

export default class GenreFilter extends React.Component {
  getGenres() {
    if (this.props.usedGenres !== undefined) {
      const keyList = this.props.genres.map((genre, i) => {
        if (this.props.usedGenres[genre.id] == true) {
          return (
            <label key={i}>
              {genre.name}
              <input
                name={genre.name}
                type="checkbox"
                checked={this.props.genres.checked}
                onChange={this.handleGenreChange.bind(this)}
              />
            </label>
          );
        } else {
          return null;
        }
      });
      return keyList;
    } else {
      return null;
    }
  }
  handleSubmit() {
    event.preventDefault();
  }
  handleGenreChange(event) {
    this.props.setGenreAction({
      name: event.target.name,
      checked: event.target.checked
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>{this.getGenres()}</form>
      </div>
    );
  }
}
