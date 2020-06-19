import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Search from "../Search/Search";
import  FavoritesList  from "../FavoritesList/FavoritesList";
import "./App.css";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className='navBar'>
          <ol>
            <li>
            <Link to="/" >Home/Search</Link>
            </li>
            <li>
            <Link to="/favorites">Fav's</Link>
            </li>
          </ol>
          </div>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={FavoritesList} />          
        </div>
      </Router>
    );
  }
  
}

export default App;
