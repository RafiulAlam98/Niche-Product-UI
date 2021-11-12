import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from './../../../../hooks/useAuth/useAuth';

const Review = () => {
    
     const [name,setName] = useState('')
     const [reviews,setReviews] = useState('')
     const [rating, setRating] = useState(0)

     const handleName = (e) =>{
         console.log(e.target.value)
         setName(e.target.value)
     }
     const handleReview = (e) =>{
          console.log(e.target.value)
          setReviews(e.target.value)
     }

     const handleRating = (e) =>{
          console.log(e.target.value)
          setRating(e.target.value)
     }

     const handleSubmit = () =>{
          const data ={
                         name: name,
                         review:reviews,
                         rating:rating
                    }
           console.log(data)
         
          fetch('http://localhost:5000/review', {
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
          })
     }


     // console.log(user.email)
     return (
          <div>
               <h2>Review Here</h2>

               <Form className="w-50 mx-auto">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Reviewer Name</Form.Label>
                    <Form.Control  onBlur={handleName} type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control onBlur={handleReview} as="textarea" rows={5} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control  onBlur={handleRating} type="email" placeholder="rating" />
                    </Form.Group>

                    <Button onClick={handleSubmit}>Submit Review</Button>
               </Form>

              
          </div>
     );
};

export default Review;