import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./styles.css";
import Button from 'react-bootstrap/Button'

function Navigation() {
    return (
      <Navbar className='bg-drk' variant="dark" collapseOnSelect expand="lg" >
        <Navbar.Brand href="#home">
          <img
            src="/logo.png"
            width="45"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="d-flex mr-5">
            <Button className="mr-4 nav-custom-button btn" variant="outline-warning">Create Campaign</Button>{' '}
            <Nav.Link href="#Hub">The Hub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation
