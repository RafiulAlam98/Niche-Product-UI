import React from 'react';
import { Col, Button } from 'react-bootstrap';

const DisplayOrder = (props) => {

     const {address, 
          brand, 
          email, 
          name, 
          phone, 
          status, 
          _id
     } = props.allOrder


     const handleUpdate = (id) =>{
          console.log(id)
          fetch(``,{
               method:'PUT',
               headers:{
                    'content-type': 'application/json'
               },
               body:JSON.stringify(id)
          })
     }
     
     return (
          <Col xs={12} md={6} lg={3}>
               <div className="manage-container mt-2 mb-4">
                    <p>ID: {_id}</p>
                    <p>Email: {email}</p>
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>Status: {status}</p>
                   

                    <Button variant="dark" className="text-warning" onClick={()=> handleUpdate(_id)}>Upadte Status
                    
                    </Button>
               </div>
          </Col>
     );
};

export default DisplayOrder;