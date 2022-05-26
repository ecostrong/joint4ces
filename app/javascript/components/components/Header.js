import React, { Component } from 'react'
import { Navbar,Container, Nav,NavDropdown } from 'react-bootstrap'
import LOGO from '../assets/joint4ces_logo.jpg'

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="#home">
          <img
            src={LOGO}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Joint 4ces logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">My Listing</Nav.Link>
              <Nav.Link href="#link">Business Listings</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
