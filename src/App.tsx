import { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

import AllSigns from './pages/sign/AllSigns';
import ViewSign from './pages/sign/ViewSign';
import AddSign from './pages/sign/AddSign';
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
        <Route path="/profile" component={Profile} />
        <Route path="/all-signs" component={AllSigns} />
        <Route path="/view-sign/:uid" component={ViewSign} />
        <Route path="/add-sign" component={AddSign} />
      </Switch>
    </Fragment>
  );
}

export default App;
