import React from 'react';
import { Col } from 'react-bootstrap';

const ExploreMore = (props) => {
     const {name} = props.product
     return (
          <Col>
               {name}
          </Col>
     );
};

export default ExploreMore;