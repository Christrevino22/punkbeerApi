import "./App.css";
import React, { Component } from "react";
import Beer from "./components/Beer";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  // handleClick = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  componentDidMount() {
    console.log("Mounted");
    fetch("https://api.punkapi.com/v2/beers")
      .then((res) => res.json())
      .then((data) => this.setState({ beers: data }));
  }
  // this lets you know when your "stuff " has updated
  componentDidUpdate() {
    console.log("I have updated");
  }

  // handleClick(){
  //   this.setState(state => ({
  //       isToggleOn: !state.isToggleOn
  //   }))
  //   console.log(this.state);
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          {this.state.beers &&
            this.state.beers.map((beer) => {
              // console.log(beer);

              return (
                <Beer
                  name={beer.name}
                  tagline={beer.tagline}
                  tips={beer.brewers_tips}
                  image={beer.image_url}
                />
              );
            })}
        </ul>
        <Footer />

        {/* <Like /> */}
        {/* <Beer />
        {console.log(this.state.beers)} */}
        {/* <button onClick = {this.handleClick}>
            Increment
        </button> */}
      </div>
    );
  }
}

export default App;
