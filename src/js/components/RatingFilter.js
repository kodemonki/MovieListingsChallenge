import React from "react";

export default class RatingFilter extends React.Component {
  //////////////////////////////
  // getIntervals
  //////////////////////////////
  // This generated the rating
  // optionList
  //////////////////////////////
  getIntervals() {
    const intervals = [];
    for (let i = 0; i <= 10; i = i + 0.5) {
      intervals.push(i);
    }
    const optionList = intervals.map((interval, i) => {
      return (
        <option key={i} value={interval}>
          {interval}
        </option>
      );
    });
    return optionList;
  }
  handleSubmit() {
    event.preventDefault();
  }
  handleRatingChange(event) {
    this.props.setRatingAction(event.target.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Min Rating:<select
              value={this.props.minimumRating}
              onChange={this.handleRatingChange.bind(this)}
            >
              {this.getIntervals()}
            </select>
          </label>
        </form>
      </div>
    );
  }
}
