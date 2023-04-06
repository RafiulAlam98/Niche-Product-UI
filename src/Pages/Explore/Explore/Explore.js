import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ExploreMore from '../ExploreMore/ExploreMore';

const Explore = () => {
     const [products,setProducts] = useState([])

     useEffect(()=>{
          fetch("https://niche-product-server-lemon.vercel.app/products")
            .then((res) => res.json())
            .then((data) => {
              // console.log(data)
              setProducts(data);
            });
     },[])
     return (
          <Container className="card-style pt-4" fluid >
               <h2 className="header-text">Explore More Products!</h2>
               <Container>
                    <Row>
                         {products.map(product => 
                         <ExploreMore 
                              product={product}
                              key={product._id}
                         ></ExploreMore>)}
                    </Row>
               </Container>

          </Container>
     );
};

export default Explore;