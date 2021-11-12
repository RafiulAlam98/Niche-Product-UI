import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = (props) => {
     const {name, review, rating} = props.review
     return (
          <Col sm={12} md={6} lg={4}>
          <Card className="service-container head-col">
               <Card.Body>
               <Card.Title className="fw-bold">{name}</Card.Title>
               <Card.Subtitle>{review}</Card.Subtitle>
               <Card.Text className="text-primary mt-3">
               <Rating
               initialRating={rating}
               emptySymbol="far fa-star"
               fullSymbol="fas fa-star"
               readonly />
               </Card.Text>
               </Card.Body>
          </Card>
     </Col>
     );
};

export default Review;