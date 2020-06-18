import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "../Search/Search";


class App extends Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={Search} />
      </div>
    );
  }
  
}

export default App;
