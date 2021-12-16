import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Errormsg from "./Errormsg";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent(){

    if (this.state.errorMessage && !this.state.lat) {
      return <Errormsg/> 
    }
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    return <Spinner message = "Please accept the location request"/>;
  }


  render() {
    return(
      <div className = "border">
        {this.renderContent()}
      </div>
    );
  };
}
ReactDom.render(<App />, document.querySelector("#root"));
