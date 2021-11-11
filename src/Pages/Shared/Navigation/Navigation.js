import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from './../../../hooks/useAuth/useAuth';

const Navigation = () => {
     const {user,signOutUser} = useAuth()
     return (
          <>
              <Navbar bg="primary" variant="dark">
               <Container>
               <Navbar.Brand href="#home">Navbar</Navbar.Brand>
               <Nav className="me-auto">
                    <Nav.Link  as={HashLink}  to ='/home'>Home</Nav.Link>
                    <Nav.Link  as={HashLink}  to='/explore'>Explore</Nav.Link>
                    {/* <Nav.Link  as={HashLink}  to='/purchase'>Purchase</Nav.Link> */}
                    <Nav.Link  as={HashLink}  to='/dashboard'>Dashboard</Nav.Link>


                    {
                         user.email && <p>User: <span  className="text-dark">{user.displayName}</span></p>
                    }



                    {
                         user.email ?

                         <button onClick={signOutUser}>Logout</button>
                         
                         :
                         <Nav.Link  as={HashLink}  to='/login'>Login</Nav.Link>
                    }                  
               </Nav>
               </Container>
               </Navbar>
          </>
     );
};

export default Navigation;