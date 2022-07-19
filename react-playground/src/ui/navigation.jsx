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
    <Navbar className="fs-4 bg-dark" dark expand="md" fixed="top">
      <NavbarBrand tag={Link} to="/home">
        vrdel&apos;s play
      </NavbarBrand>
      <Collapse navbar>
        <Nav navbar>
          <NavItem className="fs-5">
            <NavLink tag={Link} to="/main-vite">
              Vite
            </NavLink>
          </NavItem>
          <NavItem className="fs-5">
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
