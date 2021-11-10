import React from 'react';
import { Col } from 'react-bootstrap';

const Product = (props) => {
     const {name} = props.product
     console.log( props.product)
     return (
          <Col>
               {name}
          </Col>
     );
};

export default Product;