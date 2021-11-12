import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth/useAuth';

const Navigation = () => {
     const {user,signOutUser} = useAuth()
     return (

          <>
               <Navbar bg="secondary" variant="dark" expand="lg"  sticky="top">
                    <Container fluid>
                    
                         
                         <Navbar.Brand to="/home">
                              <Nav.Link as={HashLink} className="text-warning" to="/home">
                              <span className="head-col fw-bold">SHIFT </span>
                              <span className="head-col fw-bold">INTO</span>
                              <span className="text-color fw-bold"> GEAR</span>
                              </Nav.Link>
                         </Navbar.Brand>
                         
                              <Navbar.Toggle aria-controls="navbarScroll" />
                              <Navbar.Collapse id="navbarScroll">
                              <Nav className="me-auto">
                              
                              <Nav.Link as={HashLink} className="text-info fw-bold fs-5" to="/home">
                              Home
                              </Nav.Link>
                              
                              <Nav.Link as={HashLink} className="text-warning fw-bold fs-5" to="/explore">
                              Explore
                              </Nav.Link>
                              
                              <Nav.Link as={HashLink} className="text-warning fw-bold fs-5" to="/dashboard">
                              Dashboard
                              </Nav.Link>
                              
                              <Navbar.Text className="fw-bold">
                              {
                              user.email && <Navbar.Brand className="text-dark fw-bold mx-5 fs-5" >Signed In As: <span className="text-warning">{user.displayName}</span></Navbar.Brand>
                              }
                              </Navbar.Text>
                              
                              {user.email ?  (
                              <Button onClick={signOutUser} variant="dark" type="submit" className="text-warning ">
                              SIGN OUT
                              </Button>
                              ) : (
                              <Nav.Link as={HashLink}  className="fw-bold fs-5" to="/login">
                                   Sign In
                              </Nav.Link>
                              )}
                              
                              
                              
                              </Nav>

                              </Navbar.Collapse>
                         
                    </Container>
               </Navbar>
          </>
     );
};

export default Navigation;











