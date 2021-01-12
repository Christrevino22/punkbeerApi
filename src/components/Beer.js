import React, { Component } from "react";
import "./Beer.css";

class Beer extends Component {
  constructor (props) {
    super(props);

    this.state = {isToggleOn: true}
    this.state = {
      black: true
    }
  }
  
  
  

  
    handleClick(){
      this.setState({ () => {
        isToggleOn: !state.isToggleOn
      }
        
      })
    
      
    };

  changeColor = () => {
      this.setState({black: !this.state.black});
  }



  render() {
    let btn = this.state.black ? "blackButton" : "whiteButton";
    return (
      <div>
        <h1>{this.props.name}</h1>
        <img src={this.props.image} className="beer-img" />
        <span className="beer-tagline"> {this.props.tagline}</span>
        <p>{this.props.tips}</p>
        <div>
      
          <button className = {btn} onClick = {this.handleClick}></button>
        </div>
      </div>
    );
  }
}

export default Beer;
