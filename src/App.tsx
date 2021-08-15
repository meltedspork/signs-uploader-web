import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

import AllSigns from './pages/sign/AllSigns';
import AddSign from './pages/sign/AddSign';
import ViewSign from './pages/sign/ViewSign';
import Profile from './pages/Profile';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <br />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/all-signs" component={AllSigns} />
        <Route path="/add-sign" component={AddSign} />
        <Route path="/view-sign/:uid" component={ViewSign} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Fragment>
  );
}

export default App;
