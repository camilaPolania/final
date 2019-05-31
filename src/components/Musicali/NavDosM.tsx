import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavDosM extends Component {

    render() {
        return (
            <div className="ui purple inverted segment">
                <div className="ui inverted secondary menu">
                    <div className="item">
                        <Link to='/musicali'><img className="ui centered small image" src="/data/musicali.svg" /></Link>
                    </div>
                    <div className="right menu">
                        <a className="active item">COMPRAR ENTRADAS</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavDosM;