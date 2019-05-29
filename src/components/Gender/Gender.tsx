import React, { Component } from 'react';

import NavBarDos from '../NavBarDos/NavBarDos';
import Footer from '../Footer/Footer';

class Gender extends Component{

    render() {
        return (

            <div className="ui equal width grid">

                <div className="black row">
                    <div className="black column">
                        <div className="ui black inverted segment"><NavBarDos></NavBarDos>
                        </div>
                    </div>
                </div>

                <div className="black row">
                    <div className="black column">
                    <div className="ui black inverted segment">
                    <p>hellloooo bitch</p>
                        </div>
                        
                        </div>
                    </div>
               
               
                <div className="ui divided two column grid">
                    <div className="stretched row">
                        <div className="black column center aligned tamano">
                            <div className="ui black inverted segment">
                            <i aria-hidden="true" className="teal headphones inverted big icon icono"></i>GENEROS Y ARTISTAS</div>
                            <div className="ui black inverted segment">
                            <i aria-hidden="true" className="teal beer inverted big icon icono"></i>BEBIDAS</div>
                        </div>
                        <div className="black column center aligned tamano">
                            <div className="ui black inverted segment">
                            <i aria-hidden="true" className="teal users inverted big icon icono"></i>GRUPO DE AMIGOS</div>
                            <div className="ui black inverted segment">
                            <i aria-hidden="true" className="teal utensils inverted big icon icono"></i>COMIDA</div>
                        </div>
                    </div>
                </div>


                <div className="black center aligned row">
                    <div className="column">
                        <Footer></Footer>
                    </div>
                </div>
            </div>


        )
    }

}

export default Gender;