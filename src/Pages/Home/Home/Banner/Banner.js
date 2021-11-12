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
                         <h1>WELCOME TO AUTO CAR</h1>
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
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>  
          </>
     );
};

export default Banner;