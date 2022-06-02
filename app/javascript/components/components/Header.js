import React, { Component } from 'react'
import LOGO from '../assets/joint4ces_logo.jpg'
import { NavItem, Nav, NavbarBrand, Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    return (
      <>
        <NavbarBrand to="#home">
          <img
            src={LOGO}
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="Joint 4ces logo"
          />
        </NavbarBrand>
        <Navbar
          className='navbarStyle'
          container
          expand="lg"
          light
        >
         
            <div className="container">

                <Nav className="ms-auto" bg="light" expand="lg">
                  <NavItem>
                    <NavLink to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/businesses/new'>Create a Business</NavLink>
                  </NavItem>
                  {logged_in &&
                    <NavItem>
                      <NavLink to='/mylisting'>My Listing</NavLink>
                    </NavItem>
                  }
                  <NavItem>
                    <NavLink to='/businessindex'>Business Listings</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to='/about'>About</NavLink>
                  </NavItem>
                  {logged_in &&
                    <NavItem>
                      <a id="sign_out" href={sign_out_route} className="nav-link">Sign Out</a>
                    </NavItem>
                  }
                  {!logged_in &&
                  <>
                    <NavItem>
                      <a id="sign_in" href={sign_in_route} className="nav-link">Sign In</a>
                    </NavItem>
                    <NavItem>
                    <a href={new_user_route} className="nav-link">Sign Up</a>
                  </NavItem>
                  </>
                  }
                </Nav>
            </div>
          
        </Navbar>
      </>
    )
  }
}
