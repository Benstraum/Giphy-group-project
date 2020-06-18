import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return <div>
        <header className="headIt">
            <div>
                <h3>GIF-Master-Flex-List</h3>
            </div>
        </header>
    </div>;
  }
}

export default withRouter(Header);
