import React from 'react';
import Payment from '../User/Payment/Payment';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     useParams,
     useRouteMatch
   } from "react-router-dom";
import MyOrder from '../User/MyOrder/MyOrder';
import Review from '../User/Review/Review';
import useAuth from './../../../hooks/useAuth/useAuth';

const DashboardHome = () => {
     const {user,signOutUser} = useAuth()
     let { path, url } = useRouteMatch();
     return (
          <>
               {user.email && 
                    <div>
                         <Link to={`${url}/payment`}>Payment</Link>
                         <Link to={`${url}/myOrders`}>My Orders</Link>
                         <Link to={`${url}/review`}>Review</Link>
                         <button onClick={signOutUser}> <Link to={`${url}/logout`}>Logout</Link></button>                                 
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
                    </div>
               }
          </>
     );
};

export default DashboardHome;