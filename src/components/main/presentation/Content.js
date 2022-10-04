import React, { Component } from "react";

class Content extends Component{

  render() {
    return (
      <img src={this.props.asset.path} alt={this.props.asset.alt} />
    )
  }
}


export default Content;