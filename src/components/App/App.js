import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Search from "../Search/Search";
<<<<<<< HEAD
import  FavoritesList  from "../FavoritesList/FavoritesList";
=======
import  FavoriteList from "../FavoritesList/FavoritesList";
>>>>>>> 0702a1ad40e2ccdab259f426c3ddcdea459525be


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
<<<<<<< HEAD
          <Route path="/favorites" component={FavoritesList} />          
=======
          <Route path="/favorites" component={FavoriteList} />          
>>>>>>> 0702a1ad40e2ccdab259f426c3ddcdea459525be
        </div>
      </Router>
    );
  }
  
}

export default App;
