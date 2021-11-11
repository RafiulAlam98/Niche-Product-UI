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



const User = () => {
     const {user,signOutUser} = useAuth()
     let { path, url } = useRouteMatch();
     return (
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
     );
};

export default User;