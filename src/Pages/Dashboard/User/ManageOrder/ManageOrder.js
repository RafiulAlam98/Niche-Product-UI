import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const ManageOrder = ({order}) => {
     console.log(order)
     const {_id, address, email, name, phone, brand, status} = order
     const arr = [order]
     const handleDelete = id =>{
          const proceed = window.confirm('Are You proceed to Cancel the Order?')
          console.log(id)
          fetch(`https://polar-depths-02085.herokuapp.com/users/${id}`,{
               method: "DELETE",
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.deletedCount > 0){
                    const remainingOrder = arr.filter(order => order._id !== id )
                    alert('deleted successfully')
               }
          })
     }

     return (
          <Col xs={12} md={12} lg={12}>
               <Card className="service-container mt-5 mb-5">
                   
                   <Card.Body>
                   <Card.Title className="head-col fw-bold mb-3">{name}</Card.Title>
                   <Card.Title className="head-col fw-bold mb-3">{brand}</Card.Title>
                   <Card.Subtitle className="mb-2 text-color mb-3"><span className="text-dark">Address:</span> {address}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-color">{email}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-color">Status: {status}</Card.Subtitle>
                   {/* <Card.Text className="mb-2 text-color mb-3">
                        <span className="text-dark">Booking For: </span>    {place}
                   </Card.Text> */}
                   <Button onClick={() => handleDelete(_id)} variant="dark" className=" text-warning" >Cancel Purchase</Button>
                   </Card.Body>
              </Card>
          </Col>
     );
};

export default ManageOrder;