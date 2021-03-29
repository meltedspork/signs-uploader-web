import React, { Fragment } from 'react';
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
                  <NavLink to="/sign" className="nav-link">
                    Add Sign
                  </NavLink>
                </Nav>
            <DropdownButton title={nickName} menuAlign="right" id="basic-nav-dropdown">
              <Dropdown.Item href="/profile">
                Profile
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                <NavLink to="#" onClick={() => logout({ returnTo: window.location.origin })}>
                  Log out
                </NavLink>
              </Dropdown.Item>
            </DropdownButton>
          </Fragment>
          :
          <NavLink to="#" onClick={() => loginWithRedirect()}>
            Log in
          </NavLink>
        }
      </Navbar.Collapse>
    </Navbar>


    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">Signs Uploader</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="mr-auto" navbar>
    //         {!isAuthenticated ||
    //           <Fragment>
    //             <NavItem>
    //               <NavLink href="/check">Check</NavLink>
    //             </NavItem>
    //             <NavItem>
    //               <NavLink href="/sign">Add Sign</NavLink>
    //             </NavItem>
    //             <NavItem>
    //               <NavLink href="/profile">Profile</NavLink>
    //             </NavItem>
    //             <NavItem>
    //               <NavLink href="#" onClick={() => logout({ returnTo: window.location.origin })}>Log out</NavLink>
    //             </NavItem>
    //           </Fragment>
    //         }
    //       </Nav>
    //       <NavbarText>
    //       {!isAuthenticated ?
    //           <NavLink href="#" onClick={() => loginWithRedirect()}>Log in</NavLink>
    //           :
    //           <NavLink href="#" onClick={() => logout({ returnTo: window.location.origin })}>Log out</NavLink>
    //         }
    //       </NavbarText>
    //     </Collapse>
    //   </Navbar>
    // </div>
  );
}

export default NavigationBar;