import React, { Component } from "react";


class Footer extends Component {

    render() {
        return (
            <div className="ui inverted divided padded equal width grid">
                <div className="black center aligned row ">
                    <div className="column">
                        <div className="ui black inverted segment">
                            <div className="black center aligned row">
                                <img className="ui centered small image" src="/data/logo.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="column"><div className="ui black inverted segment"></div>Trabaja con nosostros</div>
                    <div className="column"><div className="ui black inverted segment"></div>Contactanos</div>
                </div>
            </div>
        )
    }
}

export default Footer;