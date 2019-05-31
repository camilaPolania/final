import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

import './_login.scss';

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import FooterL from "./FooterL";


class Login extends Component {

    render() {
        return (

            <div className="ui equal width grid black ">

                <div className="black row">
                    <div className="column centered middle aligned"><FooterL></FooterL></div>

                </div>

                <div className="black centered middle aligned row">
                    <div className="ui placeholder inverted segment">
                        <div className="ui stackable very relaxed two column grid">
                            <div className="column">
                                <form className="ui form inverted">
                                    <div className="field">
                                        <label>Username</label>
                                        <div className="ui left icon input">
                                            <input type="text" placeholder="Username" /><i
                                                aria-hidden="true"
                                                className="user icon"
                                            ></i>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label>Password</label>
                                        <div className="ui left icon input">
                                            <input type="password" placeholder="Username" /><i
                                                aria-hidden="true"
                                                className="lock icon"
                                            ></i>
                                        </div>
                                    </div>
                                    <Link to='/home'>

                                        <button className="ui primary button">Login</button>

                                    </Link>
                                </form>
                            </div>
                            <div className="middle aligned column">
                                <button className="ui big teal button">
                                    <i aria-hidden="true" className="signup icon"></i>Sign up</button>
                            </div>
                        </div>
                        <div className="ui vertical divider inverted ">Or</div>
                    </div>
                </div>

                <div className="black row container"></div>

                <div className="black row">
                    <div className="column">
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(Login);