import { Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

import Signs from './pages/sign/Signs';
import Sign from './pages/sign/Sign';
import Profile from './pages/Profile';

// import logo from './logo.svg';
import './App.css';

function App() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  return (
    <Fragment>
      <NavigationBar />
      <br />
      <Container fluid>
        {(isLoading || isAuthenticated) ?
          <Row>
            <Col>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signs" component={Signs} />
                <Route path="/sign/:uid" component={Sign} />
                <Route path="/sign" component={Sign} />
                <Route path="/profile" component={Profile} />
                </Switch>
            </Col>
          </Row>
          :
          <NavLink to="#" onClick={() => loginWithRedirect()}>
            Log in
          </NavLink>
        }
      </Container>
    </Fragment>
  );
}

export default App;
