import React from "react";
import Card from "./Card";
import axios from "axios";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    var location = window.location.pathname;
    this.state = {
      hackers: [],
      hq: `https://api.github.com/users${location}/followers`
    };
  }
  componentDidMount() {
    console.log(`loading cards from ${this.state.hq}`);
    this.refresh();
  }
  refresh() {
    axios
      .get(this.state.hq)
      .then(result => this.setState({ hackers: result.data }))
      .catch(err => console.log(err));
  }
  triggerRefresh = () => {
    console.log("trigger refresh");
    var location = window.location.pathname;
    this.setState({ hq: `https://api.github.com/users${location}/followers` });
    this.refresh();
  };
  render() {
    return (
      <div className="Hackers">
        {this.state.hackers.map((hacker, idx) => (
          <Card
            key={idx}
            hacker={hacker}
            triggerRefresh={this.triggerRefresh}
          />
        ))}
      </div>
    );
  }
}

export default Cards;
