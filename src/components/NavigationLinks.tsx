import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link,  } from 'react-router-dom';

const NavigationLinks = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0();

  return (
    <Fragment>
      <Link to="/">Home</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <Link to="/check">Check</Link>
      <br />
      <Link to="/sign">Add Sign</Link>
      <br />
      {!isAuthenticated ?
        <Link to="#" onClick={() => loginWithRedirect()}>Log in</Link>
        :
        <Link to="#" onClick={() => logout({ returnTo: window.location.origin })}>Log out</Link>
      }
    </Fragment>
  );
};

export default NavigationLinks;