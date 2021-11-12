import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = (props) => {
     const {
          _id,
          name,
          description,
          color,
          fuel,
          img,
          mile,
          model,
          price,
          type } = props.product

     // console.log( props.product)
     return (
          
          <Col xs={12} md={12} lg={6}>
                <Card className="card-style mt-3 mb-5 ">
                   <Card.Img className="img-fluid" src={img}></Card.Img>
                   <Card.Body className="d-flex flex-column justify-content-start align-items-start">
                         <Card.Title className="fw-bold  card-text card-detail">{description}</Card.Title>
                         <Card.Subtitle className=" fw-bold mb-3 mt-4 card-text">Brand:{name}</Card.Subtitle>
                         <Card.Subtitle className="mb-3 card-text">Color: {color}</Card.Subtitle>
                         <Card.Subtitle className="mb-3 card-text">Price: {price}</Card.Subtitle>
                         <Card.Subtitle className="mb-3 card-text">Model: {model}</Card.Subtitle>
                   <Link to={`/purchase/${_id}`}>
                    <Button variant="dark" className="text-warning">Purchase</Button>
                    </Link>
                   </Card.Body>
              </Card>
          </Col>

     );
};

export default Product;






        