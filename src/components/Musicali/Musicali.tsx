import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Nav from '../Musicali/Nav';
import FooterM from '../Musicali/FooterM';
import './_Musicali.scss';
import { Link } from 'react-router-dom';
import storage from '../../storage/storage';
import { Button } from 'semantic-ui-react';



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
            <p className="intro">Prueba MUSI-CALI, una nueva plataforma que te permite disfrutar del arte con tus amigos</p>
          </div>
        </div>

        <div className="center aligned row">
          <div className="purple column">
            <div className="ui purple inverted segment">
              <button className="ui yellow button">COMENZAR</button>
            </div>
          </div>
        </div>

        <div className="ui equal width grid purple inverted row">
          <div className="column jjj">
            <div role="list" className="ui divided inverted animated middle aligned list listica">
              {storage.peopleCaliFest && storage.peopleCaliFest.map((infoFestPerson: any) => {
                if (infoFestPerson.index === 0) return;
                return (
                  <div role="listitem" className="item">
                    <div className="right floated content">

                      <Button className="ui inverted vertical animated button" onClick={() => {
                        storage.select = infoFestPerson.index;
                        storage.cosineResultsData = [];
                        storage.cosineSigularity(infoFestPerson.index);
                      }}>
                        <div className="hidden content">Ver</div>
                        <div className="visible content">
                          <i aria-hidden="true" className="eye icon"></i>
                        </div></Button>

                    </div>
                    <img src={infoFestPerson.img} className="ui avatar image" />
                    <div className="content"><div className="header">{infoFestPerson.name}</div></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className=" five wide column">
            <h1>El musical al que puedes ir con tus amigos es</h1>
            <div className="ui equal width grid">

              <div className="purple row">
                <div className="column">
                  <img src={storage.peopleCaliFest[storage.select] && storage.peopleCaliFest[storage.select].img}
                    className="ui tiny circular avatar image"
                  />
                </div>

                <div className="column">
                  <div className="header inverted"><a className="infoSelect">{storage.peopleCaliFest[storage.select] && storage.peopleCaliFest[storage.select].name}</a>
                  </div>
                </div>
              </div>

              <div className="purple row">

                <div className="ui equal width grid column">

                  <div className="row">

                    <div className="column infoMusical">
                      <i aria-hidden="true" className="purple film inverted big icon icono"></i>
                    </div>

                  </div>

                  <div className="row">
                    <div className="column infoMusical">
                      <i aria-hidden="true" className="purple users inverted big icon icono"></i>
                    </div>
                  </div>

                  <div className="row">
                    <div className="column infoMusical">
                      <i aria-hidden="true" className="purple location arrow inverted big icon icono"></i>
                    </div>
                  </div>

                  <div className="row center aligned">
                    <div className="column infoMusical center aligned">
                      <button className="ui medium inverted vertical animated button">
                        <div className="hidden content"> Reserva </div>
                        <div className="visible content">
                          <i aria-hidden="true" className="calendar alternate outline icon"></i>
                        </div></button>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
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
    
export default observer(Musicali);