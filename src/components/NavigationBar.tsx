import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
  } = useAuth0();

  const nickName = 'Mister Jason';

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Signs Uploader</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {isAuthenticated ?
          <Fragment>
            <Nav className="mr-auto">
              <NavLink to="/check" className="nav-link">
                Check
              </NavLink>
              <NavLink to="/all-signs" className="nav-link">
                Signs
              </NavLink>
              <NavLink to="/add-sign" className="nav-link">
                Add Sign
              </NavLink>
            </Nav>
            <DropdownButton title={nickName} menuAlign="right" id="basic-nav-dropdown">
              <NavLink to="/profile" className="dropdown-item">
                Profile
              </NavLink>
              <Dropdown.Divider />
              <NavLink to="#" className="dropdown-item" onClick={() => logout({ returnTo: window.location.origin })}>
                Log out
              </NavLink>
            </DropdownButton>
          </Fragment>
          :
          <NavLink to="#" onClick={() => loginWithRedirect()}>
            Log in
          </NavLink>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;