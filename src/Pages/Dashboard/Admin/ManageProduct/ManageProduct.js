import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';

const ManageProduct = ({product}) => {
     const {name,  color, description, _id, img,price,model} = product

     const handleDelete = id =>{
          fetch(`http://localhost:5000/products/${id}`,{
               method:"DELETE"
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
          })
     }
     return (
          <Col xs={12} md={12} lg={12}>
                <Card className="service-container mt-5 mb-5">
                   <Card.Img className="img-fluid" src={img}></Card.Img>
                   <Card.Body>
                   <Card.Title className="head-col fw-bold mb-3">{name}</Card.Title>
                   <Card.Title className="head-col fw-bold mb-3">{color}</Card.Title>
                   <Card.Subtitle className="mb-2 text-color mb-3"><span className="text-dark">{description}</span> {description}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-color">{price}</Card.Subtitle>
                   <Card.Subtitle className="mb-2 text-color">Status: {model}</Card.Subtitle>
                   {/* <Card.Text className="mb-2 text-color mb-3">
                        <span className="text-dark">Booking For: </span>    {place}
                   </Card.Text> */}
                   <Button onClick={() => handleDelete(_id)} variant="dark" className=" text-warning" >Cancel Purchase</Button>
                   </Card.Body>
              </Card>
          </Col>
     );
};

export default ManageProduct;