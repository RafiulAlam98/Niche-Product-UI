import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import DisplayOrder from '../DisplayOrder/DisplayOrder';

const ManageAllOrders = () => {
     const [allOrders,setAllOrders] = useState([])

     useEffect(()=>{
          fetch('https://polar-depths-02085.herokuapp.com/users')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setAllOrders(data)
          })
     },[])
     return (
          <Container>
               <h2>this is manage all orders page</h2>
               <Row>
                    {
                    allOrders.map(allOrder => <DisplayOrder 
                    key={allOrder._id}
                    allOrder={allOrder}></DisplayOrder> ) 
                    }
               </Row>
          </Container>
     );
};

export default ManageAllOrders;