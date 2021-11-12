import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'

const Testimonials = () => {
     return (
          <Container  className="testimonial-container pt-5 pb-2" fluid>
               <div className="">
                         <h1 className="text-primary">WE ARE THE BEST</h1>
               </div>
               <Container>
                    <Row className="testimonial-container pb-5">                                                 
                         <Col sm={6} md={6} lg={6} className="mt-2 " >
                              <Card  className="testimonial-card">
                                   <Card.Body>
                                   <h2><span><i className="fas fa-shield-alt fa-3x text-warning"></i></span></h2>
                                   <Card.Title className="text-primary fw-bold">Highly Secured</Card.Title>
                                   <Card.Text>
                                   We’re proud of the results we’ve achieved for our clients. So we want you to hear what they have to say. Their positive comments make a far stronger case for our capabilities than we can.
                                   </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col sm={6} md={6} lg={6} className="mt-2">
                              <Card  className="testimonial-card">
                                   <Card.Body>
                                   <h2><span><i className="far fa-handshake fa-3x text-warning"></i></span></h2>
                                   <Card.Title className="text-primary fw-bold">Trusted Agents</Card.Title>
                                   <Card.Text>
                                   Our clients come from a range of industries and have faced a variety of challenges – some similar to yours. If you’d like to speak with a MAX client who can relate to your specific challenge, we can arrange it. In fact, we encourage it.
                                   </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col sm={6} md={6} lg={6} className="mt-2">
                              <Card  className="testimonial-card">
                                   <Card.Body>
                                   <h2><span><i className="fas fa-dollar-sign fa-3x text-warning"></i></span></h2>
                                   <Card.Title className="text-primary fw-bold">Get an Offer</Card.Title>
                                   <Card.Text>
                                   Contact us and we’ll set up a one-on-one, strictly confidential conversation between you and a client from a related industry.
                                   </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col sm={6} md={6} lg={6} className="mt-2">
                              <Card  className="testimonial-card">
                                   <Card.Body>
                                   <h2><span><i className="fas fa-phone-alt fa-3x text-warning"></i></span></h2>
                                   <Card.Title className="text-primary fw-bold">Free Support</Card.Title>
                                   <Card.Text>
                                   Meanwhile, here’s what a number of our clients have to say. For reasons of privacy, names and companies are not disclosed.
                                   </Card.Text>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>

       
     </Container>
     );
};

export default Testimonials;