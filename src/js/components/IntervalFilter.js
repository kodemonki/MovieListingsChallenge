import React from "react";

export default class IntervalFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { minumumRating: 1 };
  }
  getIntervals() {
    const intervals = [];
    for (let i = 0; i <= 10; i = i + 0.5) {
      intervals.push(i);
    }
    const keyList = intervals.map((interval, i) => {
      return (
        <option key={i} value={i}>
          {interval}
        </option>
      );
    });
    return keyList;
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
            Rating:<select
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
