import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
          <Col>
               <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-fluid"  variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{description}</Card.Subtitle>
                    <Link to={`/purchase/${_id}`}>
                    <Button variant="primary">Purchase</Button>
                    </Link>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Product;