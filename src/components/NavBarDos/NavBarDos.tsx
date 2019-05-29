import React, { Component } from "react";


class NavBarDos extends Component {

    render() {
        return (
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu">
                    <div className="item">
                        <img className="ui centered small image" src="/data/logo.png" />
                    </div>
                    <div className="right menu listaaa">
                        <a className="item ">PLAYLIST</a>
                        <a className=" active item">MUSI-CALI</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBarDos;