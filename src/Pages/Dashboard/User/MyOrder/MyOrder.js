import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';
import useAuth from './../../../../hooks/useAuth/useAuth';

const MyOrder = () => {
     const {user} = useAuth()
     const [orders, setOrders] = useState([])
    
     useEffect(()=>{
          fetch(`http://localhost:5000/users/${user.email}`)
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setOrders(data)
          })
     },[])
     return (
          <Container>
               <Row>
                    {
                         orders.map(order=> 
                         <ManageOrder
                         key={order._id}
                         order={order}
                         ></ManageOrder>)   
                    }
               </Row>
          </Container>
     );
};

export default MyOrder;