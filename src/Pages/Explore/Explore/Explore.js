import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreMore from '../ExploreMore/ExploreMore';

const Explore = () => {
     const [products,setProducts] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setProducts(data)
          })
     },[])
     return (
          <Container>
          <h2>this is product</h2>
             <Row xs={12} sm={12} md={6} lg={3}>
                  {products.map(product => 
                  <ExploreMore 
                    product={product}
                    key={product._id}
                  ></ExploreMore>)}
               </Row>

          </Container>
     );
};

export default Explore;