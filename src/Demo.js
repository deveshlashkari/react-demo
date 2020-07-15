import React, { Component } from "react";

class Demo extends Component {
  state = {
    name: "Priyanka",
  };
  render() {
    return (
      <div>
        <h1>Demo Component</h1>
        <p>
          {this.props.name} {this.props.age + this.state.name}
        </p>

        <button onClick={() => this.setState({ name: "Sourabh" })}>
          Click
        </button>
      </div>
    );
  }
}

export default Demo;
