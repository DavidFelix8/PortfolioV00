import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

export class NavBar extends Component {
  render() {
    return (
      <NavBar id="Navbar-Main-Main">
      <Navbar id="Navbar-Main" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="Navbar-Logo">
          DF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
           {/*  <Nav.Link className="Navbar-Links" to="/AboutMe">
              About Me
            </Nav.Link>
            <Nav.Link className="Navbar-Links" href="#">
              Skills
            </Nav.Link>
            <Nav.Link className="Navbar-Links" to="#">
              Projects
            </Nav.Link> */}
            <Nav.Link
              className="Navbar-Links"
              eventKey={2}
              href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A6d47facc-024e-48db-9a50-d0d93fd3e47e"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </NavBar>
    );
  }
}

export default NavBar;
