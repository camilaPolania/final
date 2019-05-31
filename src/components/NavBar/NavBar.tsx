import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="right menu listaaa">
            <a className="item"><Link to='/musicali'>MUSI-CALI</Link></a>

            <a className=" active item"><Link to='/'>SALIR</Link></a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;