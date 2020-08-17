import React, {
  useState, 
  useEffect
} from 'react';

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

import Home from './home';
import Projects from './projects';

import './App.css'; 

const App = () => {

  const[isOpen, setOpen] = useState(false);
  const[currentPage, setPage] = useState()

  const toggleCollapse = () => {
    console.log('set');
    setOpen(!isOpen);
  }

  useEffect( () => {
    
  }, [currentPage]);

  return (
    <div className='main-div'>
      <Router>
        <MDBNavbar color="indigo" dark expand="md">

          <MDBNavbarBrand>
            <strong className="white-text">Natsuki</strong>
          </MDBNavbarBrand>

          <MDBNavbarToggler onClick={toggleCollapse} />

          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>

            <MDBNavbarNav left>

              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/projects">Projects</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/hobbies">Hobbies</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="/about">About</MDBNavLink>
              </MDBNavItem>

            </MDBNavbarNav>

            <MDBNavbarNav right>
              <MDBNavItem>
                
                <a href='mailto:natsuki.hasegawa@gmail.com?subject=Contact'>
                  <MDBIcon icon="envelope" className="white-text"/>
                </a>

                <a href='https://www.linkedin.com/in/haseganats/'>
                  <MDBIcon fab icon="linkedin" className="white-text ml-3"/>
                </a>

                <a href='https://twitter.com/NatsukiNZ'>
                  <MDBIcon fab icon="twitter" className="white-text ml-3"/>
                </a>

                <a href='https://github.com/oosacker'>
                  <MDBIcon fab icon="github" className="white-text ml-3"/>
                </a>
                
              </MDBNavItem>
            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>

        <Switch>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>

    </div>

  );
}

export default App;
