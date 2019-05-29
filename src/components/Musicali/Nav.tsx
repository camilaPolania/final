import React, { Component } from "react";


class Nav extends Component {

  render() {
    return (
      <div className="ui purple inverted segment">
        <div className="ui inverted secondary menu">
          <div className="right menu">
            <a className="item ">PLAYLIST</a>
            
            <a className="active item">MUSI-CALI</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;