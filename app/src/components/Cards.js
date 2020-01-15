import React from "react";
import Card from "./Card";
import axios from "axios";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    var location = window.location.pathname;
    this.state = {
      hackers: [],
      hq: `https://api.github.com/users${location}/followers`,
      busy: false
    };
  }
  followersURL = () => {
    const nxt = window.location.pathname.split("/").pop();
    return `https://api.github.com/users${nxt}/followers`;
  };

  componentDidMount() {
    console.log(`loading cards from ${this.state.hq}`);
    this.refresh();
  }
  updateOnce() {
    this.setState({
      busy: true,
      hq: this.followersURL()
    }); // prevent
    this.refresh();
  }
  componentDidUpdate() {
    if (this.state.busy) return;
    const a = window.location.pathname.split("/").pop();
    const b = this.state.hq.split("/");
    const samePage = b.includes(a);
    if (samePage) return;
    console.log("app needs to refresh");
    this.updateOnce();
    // dont set state inside here
  }

  refresh() {
    axios
      .get(this.state.hq)
      .then(result => this.setState({ hackers: result.data }))
      .catch(err => {
        alert(err);
      });
  }
  triggerRefresh = () => {
    var location = window.location.pathname;
    if (this.state.hq === this.followersURL()) return;
    console.log("trigger refresh");
    this.setState({ hq: `https://api.github.com/users${location}/followers` });
    this.refresh();
  };
  render() {
    return (
      <div className="Hackers">
        {this.state.hackers.map((hacker, idx) => (
          <Card key={idx} hacker={hacker} />
        ))}
      </div>
    );
  }
}

export default Cards;
