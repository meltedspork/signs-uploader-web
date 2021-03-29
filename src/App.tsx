import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './views/Home';

import Check from './views/Check';
import CreateSign from './views/sign/CreateSign';
import Profile from './views/Profile';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/check" component={Check} />
            <Route path="/profile" component={Profile} />
            <Route path="/sign" component={CreateSign} />
          </Switch>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
