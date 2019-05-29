import React, { Component } from 'react';

import Nav from '../Musicali/Nav';
import FooterM from '../Musicali/FooterM';
import './_Musicali.scss';
//import UserProfile from '../UserProfile/UserProfile';


class Musicali extends Component {
  render() {
    return (
      <div className="ui equal width grid">
        <div className="purple row">
          <div className="purple column"><div className="ui purple inverted segment"><Nav></Nav></div></div>
        </div>

        <div className="purple center aligned row">
                <img className="ui centered big image" src="/data/musicali.svg" />
        </div>

        <div className="center aligned row">
          <div className="purple column">
            <p className="intro">Prueba Musicali, una nueva plataforma que te permite disfrutar del arte con tus amigos</p>
          </div>
        </div>

        <div className="center aligned row">
          <div className="purple column">
            <div className="ui purple inverted segment">
              <button className="ui yellow button">COMENZAR</button>
            </div>
          </div>
        </div>

        <div className="purple center aligned row">
          <div className="column listaM">
    
          </div>
        </div>

        <div className="purple center aligned row">
          <div className="column">
            <FooterM></FooterM>
          </div>
        </div>
      </div>
    );

  }
}

export default Musicali;