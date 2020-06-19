import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="navBar">
        <ol>
          <li>
            <img alt="giphy logo svg" src={image}></img>
          </li>
          <li>
            <h3>Group Giphy Project</h3>
          </li>
          <li className="link">
            <Link to="/">Home/Search</Link>
          </li>
          <li className="link">
            <Link to="/favorites">Fav's</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default withRouter(Header);
