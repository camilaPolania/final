import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button, Icon, Item, Label, Image } from 'semantic-ui-react';

import './_Home.scss';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import storage from '../../storage/storage';


class Home extends Component {
  render() {
    return (
      <div className="ui equal width grid">
        <div className="black row">
          <div className="black column"><div className="ui black inverted segment"><NavBar></NavBar></div></div>
        </div>

        <div className="black center aligned row">
          <img className="ui centered big image" src="/data/logo.svg" />
        </div>

        <div className="center aligned row">
          <div className="black column">
            <p className="intro">Crea festivales de música teniendo en cuenta los gustos de las personas que asistirán</p>
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

        <div className="ui equal width grid black inverted row">

        </div>

        <div className="ui equal width grid black inverted row">
          <div className="column jjj">
            <div role="list" className="ui divided inverted animated middle aligned list listica">
              {storage.peopleCaliFest && storage.peopleCaliFest.map((infoFestPerson: any) => {
                if (infoFestPerson.index === 0) return;
                return (
                  <div role="listitem" className="item">
                    <div className="right floated content">

                      <Button className="ui violet inverted vertical animated button" onClick={() => {
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
            <h1>Tú festival ideal</h1>
            <div className="ui equal width grid center aligned">

              <div className="black row">
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

              <div className="black row">

                <div className="ui equal width grid column">

                  <div className="row gustos">
                    <h1>Acerca de mi </h1>
                  </div>


                  <div className="row">

                    <div className="column taste">
                      <div className="row">
                        <i aria-hidden="true" className="headphones inverted big icon icono"></i>
                      </div>

                      <div className="row">

                        <div role="list" className="ui horizontal list">
                          {storage.peopleCaliFest[storage.select] && storage.peopleCaliFest[storage.select].scoreMusicGenresMax.map((e: any) => {
                            return (
                              <div key={e.categoryName + e.score} role="listitem" className="item">
                                <div className="content">
                                  <a className="ui green pointing label">{e.categoryName}</a>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>

                    </div>

                    <div className="column taste">
                      <div className="row">
                        <i aria-hidden="true" className=" users inverted big icon icono"></i>
                      </div>

                      <div className="row">

                        {storage.cosineRanking && storage.cosineRanking.slice(2, 7).map((e: any) => {
                          return (
                            <div className="column friends">

                              <Label as='a' color='purple' image size='small' pointing>
                                <Image src={e.img} size='big' />
                                {e.name}
                              </Label>


                            </div>
                          );
                        })}

                      </div>
                    </div>

                  </div>


                  <div className="row">

                    <div className="column taste">
                      <div className="row">
                        <i aria-hidden="true" className=" utensils inverted big icon icono"></i>
                      </div>

                      <div className="row">
                        <div role="list" className="ui horizontal list">
                          {storage.peopleCaliFest[storage.select] && storage.peopleCaliFest[storage.select].scoreFoodMax.map((e: any) => {
                            return (
                              <div key={e.categoryName + e.score} role="listitem" className="item">
                                <div className="content">
                                  <a className="ui green pointing label">{e.categoryName}</a>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>

                    </div>

                    <div className="column taste">
                      <div className="row">
                        <i aria-hidden="true" className="beer inverted big icon icono"></i>
                      </div>

                      <div className="row">

                        <div role="list" className="ui horizontal list">
                          {storage.peopleCaliFest[storage.select] && storage.peopleCaliFest[storage.select].scoreDrinkMax.map((e: any) => {
                            return (
                              <div key={e.categoryName + e.score} role="listitem" className="item">
                                <div className="content">
                                  <a className="ui green pointing  label">{e.categoryName}</a>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
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

export default observer(Home);