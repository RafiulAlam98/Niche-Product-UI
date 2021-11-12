import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
     return (
          <>
               <Container fluid className="footer-container ">
                    <Row>
                    <Col xs={12} md={3} className="footer-text">
                         <h2 className="mt-5">
                              <span className="footer-style">SHIFT </span>
                             
                              <span className="footer-style"> GEAR</span>
                         </h2>
                         <h4 className="footer-style">SELL RENT EXCHANGE</h4>
                         <h2 className="footer-style">Follow Us On</h2>
                         <span className="mx-2">
                              <i className="fab fa-facebook-f head-col  fa-2x m-3 text-light"></i>
                              <i className="fab fa-twitter head-col  fa-2x m-3 text-light"></i>
                              <i className="fab fa-google-plus-g head-col  fa-2x m-3 text-light"></i>
                              <i className="fab fa-linkedin-in head-col  fa-2x m-3 text-light"></i>
                              
                         </span>
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                         <div className="mt-5">
                         <h2 className="text-light">SERVICES</h2>
                         <br />
                         <h6 className="d-flex align-items-center mb-4">
                              <span>
                              <i className="fa fa-map-marker-alt fa-2x text-light m-4"></i>
                              </span>
                              <span className="footer-style">  2752 Willison Street <br />
                              Eagan, United State</span>
                         </h6>
                         <h6 className="d-flex align-items-center mb-4">
                         <span>
                              <i className="fa fa-phone-square-alt fa-2x text-light m-4"></i>
                         </span>
                         <span className="footer-style">+01852-1265122 <br />+01852-1265122</span>
                         </h6>
                         <h6 className="d-flex align-items-center mb-4">
                         <span>
                              <i class="far fa-envelope fa-2x text-light m-3 "></i>
                         </span>
                         <span className="footer-style"> mrafiul.alam7@gmail.com</span>
                         </h6>
                         </div>
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                         <div className="mt-5">
                              <h2 className="text-light">SUPPORT</h2>
                              <br />
                              <h6 className="footer-style">Contact Us</h6>
                              <h5 className="footer-style">About Us</h5>
                              <h6 className="footer-style">Destination</h6>
                              <h5 className="footer-style">Our Blogs</h5>
                              <h6 className="footer-style">Package</h6>
                         </div>
                         
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                              <div className="mt-5">
                                   <h2 className="footer-style">WE ACCEPTS</h2>
                                   <br />
                                   <span><i className="fab fa-cc-visa fa-2x text-light m-4"></i></span>
                                   <span><i className="fab fa-amazon-pay fa-2x text-light m-4"></i></span>
                                   <span><i className="fab fa-cc-paypal fa-2x text-light m-4"></i></span>
                                   <br />
                                   <span><i className="fab fa-cc-mastercard fa-2x text-light m-4"></i></span>
                                   <span><i className="fab fa-cc-discover fa-2x text-light m-4"></i></span>
                                   <span><i className="fab fa-bitcoin fa-2x text-light m-4"></i></span>
                              </div>
                    </Col>
                    </Row>
                    <h5 className="footer-style mt-4">
                         <span><i className="far fa-copyright"></i></span>
                         M.Rafiul Alam
                         </h5>
               </Container>
               
          </>
     );
};

export default Footer;