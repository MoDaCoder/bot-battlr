import React, { Component } from "react";

class BotsPage extends Component {
  
  Bot(props){
    return <div>{props.bot}</div>
  }

  render() {
    return <div>"Hello"{this.props.bot}</div>;
  }
}

export default BotsPage;
