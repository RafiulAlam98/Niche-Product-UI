import React from 'react';
import useAuth from '../../../../hooks/useAuth/useAuth';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     useParams,
     useRouteMatch
   } from "react-router-dom";
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import { Col, Container, Row, Button } from 'react-bootstrap';

const Admin = () => {
     const {signOutUser} = useAuth()
     let { path, url } = useRouteMatch();


     return (
          <Container fluid className="pt-5">
              <Container>
                    <h1 className="header-text mb-3">ADMIN PANEL</h1>
              </Container>
            
               <Container>
                    <Row className="dashboard-row">
                         <Col xs={12} sm={12} lg={12} className="mt-3">
                              <Link className="link-container" to={`${url}/manageAllOrder`}>ORDERS</Link>
                              <Link className="link-container" to={`${url}/makeAdmin`}>ADMIN</Link>
                              <Link className="link-container" to={`${url}/addProducts`}>PRODUCT</Link>
                              <Link className="link-container" to={`${url}/manageProduct`}>MANAGES</Link>
                              <Link className="link-container" to='/home'>HOME</Link>
                              <Button  onClick={signOutUser} variant="primary" type="submit" className="text-white  ms-lg-3">
                              SIGN OUT
                              </Button>
                         </Col>
                    </Row>
               </Container>

               <Switch>
                              <Route path={`${path}/manageAllOrder`}>
                                   <ManageAllOrders></ManageAllOrders>
                              </Route>
                              <Route path={`${path}/makeAdmin`}>
                                  <MakeAdmin></MakeAdmin>
                              </Route>
                              <Route path={`${path}/addProducts`}>
                                   <AddProducts></AddProducts>
                              </Route>
                              <Route path={`${path}/manageProduct`}>
                                  <ManageProducts></ManageProducts>
                              </Route>
                         </Switch>

          </Container>
     );
};

export default Admin;