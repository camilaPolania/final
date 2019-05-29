import React, { Component } from "react";


class FooterM extends Component {

    render() {
        return (
            <div className="ui inverted divided padded equal width grid">
                <div className="purple center aligned row ">
                    <div className="column">
                        <div className="ui purple inverted segment">
                            <div className="purplecenter aligned row">
                                <img className="ui centered small image" src="/data/musicali.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="column"><div className="ui purple inverted segment"></div>Acerca de nosotros</div>
                    <div className="column"><div className="ui purple inverted segment"></div>Contactanos</div>
                </div>
            </div>
        )
    }
}

export default FooterM;