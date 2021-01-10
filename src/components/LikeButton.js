import React, { Component } from 'react'

export class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    }
  }
  
  
  
  
  render() {
    const { text } = this.state
    return (
      <Button 
         onClick={ () => { this.changeText("newtext")}  }> {text} </Button> )
    }

export default LikeButton
