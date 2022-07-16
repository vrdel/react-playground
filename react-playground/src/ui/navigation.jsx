import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import {Link} from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar color="secondary" dark expand="md" fixed="top">
      <NavbarBrand tag={Link} to="/">
        vrdel&apos;s play
      </NavbarBrand>
      <Collapse navbar>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/main-vite">
              Vite
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/react-hook-form">
              react-hook-form
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
