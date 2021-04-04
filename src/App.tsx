import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './views/Home';

import Check from './views/Check';
import Signs from './views/sign/Signs';
import AddSign from './views/sign/AddSign';
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
        <Route path="/signs" component={Signs} />
        <Route path="/add-sign" component={AddSign} />
      </Switch>
    </Fragment>
  );
}

export default App;
