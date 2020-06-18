import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "../Search/Search";
import  FavoriteList from "../FavoritesList/FavoritesList";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={FavoriteList} />          
        </div>
      </Router>
    );
  }
  
}

export default App;
