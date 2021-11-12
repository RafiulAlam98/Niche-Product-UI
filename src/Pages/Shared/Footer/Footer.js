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
                              {/* <span className="footer-style">INTO</span> */}
                              <span className="footer-style"> GEAR</span>
                         </h2>
                         <h4 className="footer-style">CAR SELL RENT EXCHANGE</h4>
                         <h2 className="footer-style">Follow Us On</h2>
                         <span className="mx-2">
                              <i className="fab fa-facebook-f head-col  fa-2x me-3"></i>
                              <i class="fab fa-twitter head-col  fa-2x me-3"></i>
                              <i class="fab fa-google-plus-g head-col  fa-2x me-3"></i>
                              <i class="fab fa-linkedin-in head-col  fa-2x me-3"></i>
                              
                         </span>
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                         <div className="mt-5">
                         <h2 className="text-light">SERVICES</h2>
                         <br />
                         <h6 className="d-flex align-items-center mb-4">
                              <span>
                              <i className="fas fa-map-marker-alt fa-2x text-danger me-4"></i>
                              </span>
                              <span className="">  2752 Willison Street <br />
                              Eagan, United State</span>
                         </h6>
                         <h6 className="d-flex align-items-center mb-4">
                         <span>
                              <i className="fas fa-phone-square-alt fa-2x text-danger me-4"></i>
                         </span>
                         <span className="">+01852-1265122 <br />+01852-1265122</span>
                         </h6>
                         <h6 className="d-flex align-items-center mb-4">
                         <span>
                              <i class="fas fa-envelope fa-2x text-danger me-3 "></i>
                         </span>
                         <span className=""> mrafiul.alam7@gmail.com</span>
                         </h6>
                         </div>
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                         <div className="mt-5">
                              <h2 className="text-light">SUPPORT</h2>
                              <br />
                              <h6 className="text-color">Contact Us</h6>
                              <h5 className="head-col">About Us</h5>
                              <h6 className="text-color">Destination</h6>
                              <h5 className="head-col">Our Blogs</h5>
                              <h6 className="text-color">Package</h6>
                         </div>
                         
                    </Col>
                    <Col xs={12} md={3} className="footer-text">
                              <div className="mt-5">
                                   <h2 className="">WE ACCEPTS</h2>
                                   <br />
                                   <span><i className="fab fa-cc-visa fa-3x text-light me-3"></i></span>
                                   <span><i className="fab fa-amazon-pay fa-3x text-light me-3"></i></span>
                                   <span><i className="fab fa-cc-paypal fa-3x text-light me-3"></i></span>
                                   <br />
                                   <span><i className="fab fa-cc-mastercard fa-3x text-light me-3"></i></span>
                                   <span><i className="fab fa-cc-discover fa-3x text-light me-3"></i></span>
                                   <span><i className="fab fa-bitcoin fa-3x text-light me-3"></i></span>
                              </div>
                    </Col>
                    </Row>
                    <h5 className=" mt-4">
                         <span><i className="far fa-copyright"></i></span>
                         M.Rafiul Alam
                         </h5>
               </Container>
               
          </>
     );
};

export default Footer;