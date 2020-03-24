import React, { Component } from "react";

export default class MainCalcArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      result: null,
      fnumber: 1,
      snumber: 3
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const fnumber = parseFloat(this.state.fnumber);
    const snumber = parseFloat(this.state.snumber);
    this.setState({ result: fnumber + snumber });
  };

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(
      prevState => ({
        [name]: value
      })
      //() => console.log(this.state)
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.date.toLocaleTimeString()}</h1>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="fnumber">Pierwsza liczba:</label>
            <br />
            <input
              type="text"
              id="fnumber"
              name="fnumber"
              value={this.state.fnumber}
              onChange={this.handleChange}
            />{" "}
            <br />
            <label htmlFor="snumber">Last name:</label>
            <br />
            <input
              type="text"
              id="snumber"
              name="snumber"
              value={this.state.snumber}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Dodaj"></input>
          </form>
        </div>
        <div>
          <h1>Wynik: {this.state.result}</h1>
        </div>
      </div>
    );
  }
}
