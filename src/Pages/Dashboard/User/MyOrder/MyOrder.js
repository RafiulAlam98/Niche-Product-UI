import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import useAuth from './../../../../hooks/useAuth/useAuth';

const MyOrder = () => {
     const {user} = useAuth()
     const [orders, setOrders] = useState([])
    
     useEffect(()=>{
          fetch(`https://polar-depths-02085.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setOrders(data)
          })
     },[])
     return (
          <Container fluid className="card-style pt-4" >
                <h1 className="header-text mt-3 mb-3">YOUR ORDERS ARE DISPLAYED HERE</h1>

               <Container>  
                    <Row className="dashboard-row">
                         {
                              orders.map(order=> 
                              <ManageOrder
                              key={order._id}
                              order={order}
                              ></ManageOrder>)   
                         }
                    </Row>
               </Container>
          </Container>
     );
};

export default MyOrder;