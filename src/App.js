import React, { Component } from "react";
import {
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem, 
  MDBNavLink,
  MDBNavbarToggler, 
  MDBCollapse, 
  MDBIcon, 
} from "mdbreact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">

        <MDBNavbarBrand>
          <strong className="white-text">Natsuki</strong>
        </MDBNavbarBrand>

        <MDBNavbarToggler onClick={this.toggleCollapse} />

        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav left>

            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/projects">Projects</MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              
              <a href='mailto:natsuki.hasegawa@gmail.com?subject=Contact'>
                <MDBIcon icon="envelope" className="white-text ml-3"/>
              </a>

              <a href='https://www.linkedin.com/in/haseganats/'>
                <MDBIcon fab icon="linkedin" className="white-text ml-3"/>
              </a>
              
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>

      <Switch>

        <Route path="/projects">
          <>
            this is the projects page
          </>
        </Route>

        <Route path="/">
          <>
            this is the home page
          </>
        </Route>

      </Switch>

    </Router>
    );
  }
}

export default NavbarPage;
