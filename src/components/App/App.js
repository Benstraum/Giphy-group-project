import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Search from "../Search/Search";
import  FavoritesList  from "../FavoritesList/FavoritesList";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./App.css";
import image from '../../images/giphy-logo-1.svg'

class App extends Component {

  render() {
    return (
      <Router> <div>
        <AppBar position="static">
            <Toolbar>
          <div className='navBar'>
         
          <ol>
            <li>
            <img alt="giphy logo svg"src={image}></img>
            </li>
            <li >
              <h3>Group Giphy Project</h3>
            </li>
            <li className="link">
            <Link to="/" >Home/Search</Link>
            </li>
            <li className="link">
            <Link to="/favorites">Fav's</Link>
            </li>
          </ol>
          </div>
          </Toolbar>
          </AppBar>
          <Route exact path="/" component={Search} />
          <Route path="/favorites" component={FavoritesList} />          
        </div>
      </Router>
    );
  }
  
}

export default App;
