import React, { Component } from 'react'
// import { Navbar,Container, Nav } from 'react-bootstrap'
import LOGO from '../assets/joint4ces_logo.jpg'
import { NavItem, Nav, NavbarBrand, NavbarToggler } from 'reactstrap'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged in:", logged_in)
    console.log("current_user:", current_user)

    return (
   
      <Nav bg="light" expand="lg">
        <div className="container">
          <NavbarBrand to="#home">
          <img
            src={LOGO}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Joint 4ces logo"
          />
          </NavbarBrand>
          <NavbarToggler aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav className="ms-auto">
              <NavItem href="#home">Home</NavItem>
              <NavItem href="#link">My Listing</NavItem>
              <NavItem href="#link">Business Listings</NavItem>
              <NavItem href="#link">About</NavItem>
              {logged_in &&
                <NavItem>
                  <a href={sign_out_route} className="nav-link">Sign Out</a>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Sign In</a>
                </NavItem>
              }
              {!logged_in &&
                <NavItem>
                  <a href={new_user_route} className="nav-link">Sign Up</a>
                </NavItem>
              }
            </Nav>
          {/* </Navbar.Collapse> */}
        </div>
      </Nav>
    )
  }
}
