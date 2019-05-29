import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../Home/Home';
import UserProfile from '../UserProfile/UserProfile';
import Musicali from '../Musicali/Musicali';
import storage from '../../storage/storage';


class App extends Component {
  constructor(props: any) {
    super(props);
  }

  //*se ejecutará el método asíncrono... es una certeza
  componentDidMount() {
    storage.csvGetDataAsync();

    setTimeout(() => {
      storage.csvGetPeopleFest();

    }, 3000);

  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/user' exact component={UserProfile}></Route>
          <Route path='/musicali' exact component={Musicali}></Route>
        </div>
      </Router>

    );

  }
}

export default App;
