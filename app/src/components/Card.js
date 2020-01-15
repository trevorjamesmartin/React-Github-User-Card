import React from "react";

class Card extends React.Component {
  render() {
    return (
      <section className="Hacker">
        <h1>{this.props.hacker.name}</h1>
        <img
          src={this.props.hacker.avatar_url}
          alt="avatar"
          className="HackerImg"
        />
        <ul className="Hackers" />
      </section>
    );
  }
}

export default Card;
