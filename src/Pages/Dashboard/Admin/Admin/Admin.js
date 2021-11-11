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

const Admin = () => {
     const {user,signOutUser} = useAuth()
     let { path, url } = useRouteMatch();


     return (
          <div>
               <Link to={`${url}/manageAllOrder`}>Manage All Order</Link>
               <Link to={`${url}/makeAdmin`}>Make Admin</Link>
               <Link to={`${url}/addProducts`}>Add Product</Link>
               <Link to={`${url}/manageProduct`}>Manage Product</Link>
               <button onClick={signOutUser}> 
               <Link to={`${url}/logout`}>Logout</Link>
               </button> 

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

          </div>
     );
};

export default Admin;