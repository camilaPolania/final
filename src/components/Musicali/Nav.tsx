import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {

  render() {
    return (
      <div className="ui purple inverted segment">
        <div className="ui inverted secondary menu">
          <div className="right menu">
            <a className="active item">
              <Link to="/home">CALIFEST</Link></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;