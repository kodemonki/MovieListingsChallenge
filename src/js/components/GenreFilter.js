import React from "react";

export default class GenreFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minumumRating: 1 };
  }
  getIntervals() {
    if (this.props.genres !== undefined) {
      const keyList = this.props.genres.map((genre, i) => {
        return (
          <option key={i} value={i}>
            {genre.name}
          </option>
        );
      });
      return keyList;
    } else {
      return null;
    }
  }
  handleSubmit() {
    //this.props.changeOptions(this.state);
    event.preventDefault();
  }
  handleIntervalChange() {}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Genre:<select
              value={this.state.minumumRating}
              onChange={this.handleIntervalChange.bind(this)}
            >
              {this.getIntervals()}
            </select>
          </label>
        </form>
      </div>
    );
  }
}
