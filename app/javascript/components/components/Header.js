import React, { Component } from "react";
// import LOGO from "../assets/joint4ces_logo.jpg";
import { NavItem, Nav, NavbarBrand, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <>
        <Navbar className="navbarStyle" container expand="lg" bg="light" fixed="top">
          <Navbar.Brand to="#home">
            <img
              src="https://joint4ces.com/wp-content/uploads/2021/09/Asset-52_modified4-1024x998.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="Joint 4ces logo"
            />
          </Navbar.Brand>

          <div className="container">
            <Nav className="ms-auto" bg="light" expand="lg">
              <NavItem>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              {logged_in && (
              <NavItem>
                <NavLink to="/businesses/new" className="nav-link">
                  Create a Business
                </NavLink>
              </NavItem>
              )}
              {logged_in && (
                <NavItem>
                  <NavLink to="/mylisting" className="nav-link">
                    My Listing
                  </NavLink>
                </NavItem>
              )}
              <NavItem>
                <NavLink to="/businessindex" className="nav-link">
                  Business Listings
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              {logged_in && (
                <NavItem>
                  <a id="sign_out" href={sign_out_route} className="nav-link">
                    Sign Out
                  </a>
                </NavItem>
              )}
              {!logged_in && (
                <>
                  <NavItem>
                    <a id="sign_in" href={sign_in_route} className="nav-link">
                      Sign In
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href={new_user_route} className="nav-link">
                      Sign Up
                    </a>
                  </NavItem>
                </>
              )}
            </Nav>
          </div>
        </Navbar>
      </>
    );
  }
}
