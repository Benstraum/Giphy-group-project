import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Search from "../Search/Search";
import  FavoritesList  from "../FavoritesList/FavoritesList";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <ol>
            <li>
            <Link to="/" >Home</Link>
            </li>
            <li>
            <Link></Link>
            </li>
          </ol>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={FavoritesList} />          
        </div>
      </Router>
    );
  }
  
}

export default App;
