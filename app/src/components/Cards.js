import React from "react";
import Card from "./Card";
import axios from "axios";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hackers: [],
      hq: this.followersURL()
    };
  }
  followersURL = () => {
    const elite = window.location.pathname.split("/")[1];
    return `https://api.github.com/users/${elite}/followers`;
  };

  componentDidMount() {
    this.refresh();
  }

  componentDidUpdate() {
    const a = window.location.pathname.split("/")[1];
    const b = this.state.hq.split("/");
    const samePage = b.includes(a);
    if (samePage) return;
    this.props.changeUser(a);
  }

  refresh() {
    axios
      .get(this.state.hq)
      .then(result => this.setState({ hackers: result.data }))
      .catch(err => {
        alert(err);
      });
  }

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
