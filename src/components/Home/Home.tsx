import React, { Component } from 'react';


import './_Home.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
//import UserProfile from '../UserProfile/UserProfile';


class Home extends Component {
  render() {
    return (
      <div className="ui equal width grid">
        <div className="black row">
          <div className="black column"><div className="ui black inverted segment"><NavBar></NavBar></div></div>
        </div>

        <div className="black center aligned row">
          <img className="ui centered medium image" src="/data/logo.png" />
        </div>

        <div className="center aligned row">
          <div className="black column">
            <p>Crea festivales de musicales de acuerdo a los gustos de las personas</p>
          </div>
        </div>

        <div className="center aligned row">
          <div className="black column">
            <div className="ui black inverted segment">
              <button className="ui basic inverted button">GENERAR GRUPOS</button>
              <button className="ui toggle inverted button">TODOS</button>
            </div>
          </div>
        </div>

        <div className="black center aligned row">
          <div className="column lista">
            <p>Listaaaaaassss bitchhhh (personas y generos musicales)</p>
          </div>
        </div>

        <div className="black center aligned row">
          <div className="column">
            <Footer></Footer>
          </div>
        </div>
      </div>
    );

  }
}

export default Home;