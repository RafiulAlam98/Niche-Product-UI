import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreMore from '../ExploreMore/ExploreMore';

const Explore = () => {
     const [products,setProducts] = useState([])

     useEffect(()=>{
          fetch('https://polar-depths-02085.herokuapp.com/products')
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               setProducts(data)
          })
     },[])
     return (
          <Container>
          <h2>this is product</h2>
             <Row xs={12} lg={12}>
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