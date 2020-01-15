import React from "react";
import Cards from "./Cards";
// import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      url: this.props.data.followers_url
    };
    console.log("Table constructed");
  }
  render() {
    return (
      <React.Fragment>
        <Cards loadURL={this.state.url} />
      </React.Fragment>
    );
  }
}

export default Table;
