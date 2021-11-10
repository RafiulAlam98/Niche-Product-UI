import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
     return (
          <>
               <Carousel>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://i.ibb.co/bLf5GZY/banner-img-1.jpg"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h1>WELCOME TO AUTOPILOT CAR</h1>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://i.ibb.co/GQjWTpr/banner-img-2.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h1>FIND YOUR DREAM CAR</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://i.ibb.co/mRQyN5Q/banner-img-3.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h1>BEST PLACE FOR SELL CAR!</h1>
                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>  
          </>
     );
};

export default Banner;