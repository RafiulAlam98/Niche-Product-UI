import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';

const Reviews = () => {
     const [reviews, setReviews] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/review')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setReviews(data)
          })
     },[])
     return (
          <Container>
               <Row>
                    {
                         reviews.map(review => <Review 
                         key={review._id}
                         review={review}
                         ></Review>)
                    }
               </Row>
          </Container>
     );
};

export default Reviews;