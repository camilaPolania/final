import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from '../Home/Home';
import Musicali from '../Musicali/Musicali';
import storage from '../../storage/storage';
import Login from '../Login/Login';



class App extends Component {
  constructor(props: any) {
    super(props);
  }

  //*se ejecutará el método asíncrono... es una certeza
  componentDidMount() {
    storage.csvGetDataAsync();

    setTimeout(() => {
      storage.csvGetPeopleFest();

    }, 1000);

  }

  render() {
    return (
      <Router>
        <div>
        <Route path='/' exact component={Login}></Route>
          <Route path='/home' exact component={Home}></Route>
          <Route path='/musicali' exact component={Musicali}></Route>
        </div>
      </Router>

    );

  }
}

export default observer (App);
