import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
     const [products,setProducts] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               setProducts(data)
          })
     },[])

     return (
          <Container>
               <h1>OUR PRODUCTS</h1>
               <Row xs={12} sm={12} md={6} lg={3}>
                  {products.map(product => <Product
                  product={product}
                  key={product._id}></Product>)}
               </Row>

          </Container>
     );
};

export default Products;