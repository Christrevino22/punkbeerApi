import React, { Component } from "react";
import "./Beer.css";

class Beer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Like",
      text2: "dislike",
    };
  }

  handleClick = () => {
    // console.log("button was clicked!");
    this.setState({
      text: "LIKED!!!!",
    });
  };

  unlikeBtn = () => {
    // console.log("this button was clicked");
    this.setState({
      text2: "DISLIKED!!!",
    });
  };

  render() {
    // let btn = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} alt="text" className="beer-img" />
        <span className="beer-tagline"> {this.props.tagline}</span>
        <p>{this.props.tips}</p>
        <div>
          <button className="btn__1" onClick={this.handleClick}>
            {this.state.text}
          </button>
          <button className="btn__2" onClick={this.unlikeBtn}>
            {this.state.text2}
          </button>
        </div>
      </div>
    );
  }
}

export default Beer;
