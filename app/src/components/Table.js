import React from "react";
import Cards from "./Cards";
// import axios from "axios";

class Table extends React.Component {
  constructor(props) {
    super(props);
    console.log("Table constructed");
  }
  render() {
    return (
      <React.Fragment>
        <Cards loadURL={this.props.data.followers_url} />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.looneylabs.com/games/fluxx"
        >
          <img
            className="Fluxx"
            alt="Fluxx"
            src="https://www.looneylabs.com/sites/default/files/Fluxx5.0-Box_3D_sm_0.jpg"
          />
        </a>
      </React.Fragment>
    );
  }
}

export default Table;
