import React from "react";
import Cards from "./Cards";

class Table extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Cards
          loadURL={this.props.data.followers_url}
          changeUser={this.props.changeUser}
        />
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
