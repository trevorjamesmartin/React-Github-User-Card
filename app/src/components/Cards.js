import React from "react";
import Card from "./Card";
import axios from "axios";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hackers: [],
      hq: this.props.loadURL
    };
  }
  componentDidMount() {
    console.log(`loading cards from ${this.state.hq}`);
    axios
      .get(this.state.hq)
      .then(result => this.setState({ hackers: result.data }));
  }
  render() {
    return (
      <div className="Hackers">
        {this.state.hackers.map((hacker, idx) => {
          return <Card key={idx} hacker={hacker} />;
        })}
      </div>
    );
  }
}

export default Cards;
