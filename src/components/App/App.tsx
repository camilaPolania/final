import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../Home/Home';
import UserProfile from '../UserProfile/UserProfile';
import Gender from '../Gender/Gender';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/user' exact component={UserProfile}></Route>
          <Route path='/gender' exact component={Gender}></Route>
        </div>
      </Router>

    );

  }
}

export default App;
