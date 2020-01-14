import React from "react";
import axios from "axios";
// import logo from "./logo.svg";
// import "./App.css";

class App extends React.Component {
  state = {
    baseURL: "https://api.github.com/users/debauchery1st",
    data: []
  };

  componentDidMount() {
    axios
      .get(this.state.baseURL)
      .then(result => this.setState({ data: result.data }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>gh</h1>
      </div>
    );
  }
}

export default App;
