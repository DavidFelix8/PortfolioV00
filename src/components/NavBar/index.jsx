import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

export class NavBar extends Component {
  render() {
    return (
      <Navbar id="Navbar-Main" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/" className="Navbar-Logo">
          DF
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="Navbar-Links" href="#">
              About Me
            </Nav.Link>
            <Nav.Link className="Navbar-Links" href="#">
              Skils
            </Nav.Link>
            <Nav.Link className="Navbar-Links" href="#">
              Projects
            </Nav.Link>
            <Nav.Link className="Navbar-Links" eventKey={2} href="#">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
