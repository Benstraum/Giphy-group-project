import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "../Search/Search";
import { FavoriteItem } from "../FavoriteItem/FavoriteItem";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={FavoriteItem} />          
        </div>
      </Router>
    );
  }
  
}

export default App;
