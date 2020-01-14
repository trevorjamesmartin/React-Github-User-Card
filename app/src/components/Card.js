import React from "react";

class Card extends React.Component {
  render() {
    return (
      <section className="Hacker">
        <h1>{this.props.hacker.name}</h1>
        <img src={this.props.hacker.avatar_url} className="HackerImg" />
        <ul>
          <li>followers {this.props.hacker.followers}</li>
          <li>following {this.props.hacker.following}</li>
        </ul>
      </section>
    );
  }
}

export default Card;
