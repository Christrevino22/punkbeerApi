import React, { Component } from "react";
import "./Beer.css";

class Beer extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} className="beer-img" />
        <span className="beer-tagline"> {this.props.tagline}</span>
        <p>
          {this.props.tips}
        </p>
      </div>
    );
  }
}

export default Beer;
