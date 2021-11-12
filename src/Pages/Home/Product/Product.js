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
                <Card className="card-style mt-5 mb-5">
                   <Card.Img className="img-fluid" src={img}></Card.Img>
                   <Card.Body>
                   <Card.Title className="fw-bold mb-3">{name}</Card.Title>
                   <Card.Title className=" fw-bold mb-3">{description}</Card.Title>
                   <Card.Subtitle className="mb-2  mb-3"><span className="text-dark">{description}</span> {description}</Card.Subtitle>
                   <Card.Subtitle className="mb-2">{price}</Card.Subtitle>
                   <Card.Subtitle className="mb-2">Model: {model}</Card.Subtitle>
                   <Link to={`/purchase/${_id}`}>
                    <Button variant="primary">Purchase</Button>
                    </Link>
                   </Card.Body>
              </Card>
          </Col>

     );
};

export default Product;






        