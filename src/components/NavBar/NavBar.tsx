import React, { Component } from "react";


class NavBar extends Component {

  render() {
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="right menu listaaa">
            <a className="item ">Lista de personas</a>
            <a className="item">Generos Musicales</a>
            <a className=" active item">Arte y Música</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;