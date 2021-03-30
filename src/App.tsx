import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './views/Home';

import Check from './views/Check';
import CreateSign from './views/sign/CreateSign';
import Profile from './views/Profile';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/check" component={Check} />
        <Route path="/profile" component={Profile} />
        <Route path="/sign" component={CreateSign} />
      </Switch>
    </Fragment>
  );
}

export default App;
