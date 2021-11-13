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
import Payment from '../Payment/Payment';
import MyOrder from '../MyOrder/MyOrder';
import Review from '../Review/Review';
import './User.css'
import { Col, Container, Row, Button } from 'react-bootstrap';


const User = () => {
     const {signOutUser} = useAuth()
     let { path, url } = useRouteMatch();
     return (
          <Container fluid className="pt-5">

               <h1 className="header-text mb-3">USER PANEL</h1>
               <Container>
                    <Row className="dashboard-row">
                         <Col xs={12} sm={12} lg={12} className="mt-3">
                              <Link className="link-container" to={`${url}/payment`}>PAYMENT</Link>
                              <Link className="link-container" to={`${url}/myOrders`}>ORDERS</Link>
                              <Link className="link-container" to={`${url}/review`}>REVIEW</Link>
                              <Link className="link-container" to='/home'>HOME</Link>
                              <Button  onClick={signOutUser} variant="dark" type="submit" className="text-warning ms-lg-3">
                              SIGN OUT
                              </Button>
                         </Col>
                    </Row>               
               </Container>                  
               <Switch>
                    <Route path={`${path}/payment`}>
                    <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                         <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                    <Review></Review>
                    </Route>
               </Switch>
          </Container>
     );
};

export default User;