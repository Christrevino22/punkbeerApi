import React, { Component } from "react";
import "./Beer.css";

class Beer extends Component {
  handleClick = () => {
    console.log("button was clicked!!");
    this.setState({})
  };
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} className="beer-img" />
        <span className="beer-tagline"> {this.props.tagline}</span>
        <p>{this.props.tips}</p>
        <div>
          button goes here
        </div>
      </div>
    );
  }
}

export default Beer;
