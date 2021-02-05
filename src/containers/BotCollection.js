import React, { Component } from "react";

class BotCollection extends Component {
//Get API
constructor(props) {
  super(props);
  this.state = {
    isLoaded: false,
    bots: []
  };
}

  componentDidMount() {
    // debugger
    fetch("http://localhost:6001")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          bots: result.bots
        })
      }
    )
  }

  render() {
    const {bots} = this.state;
    return (
      <div className="ui four column grid">
        {bots.map(bot => (
          <li key={bot.id}>
            {bot.name} {bot.health} {bot.damage} {bot.armor} {bot.bot_class} {bot.catchphrase} {bot.avatar_url}
          </li>
        ))}
        <div className="row">
        </div>
      </div>
    );
  }
}

export default BotCollection;
