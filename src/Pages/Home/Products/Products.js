import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
     const [products,setProducts] = useState([])
     const [page,setPage] = useState('home')
     const size = 6;

     useEffect(()=>{
          fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               setProducts(data)
          })
     },[])

     return (
          <Container>
               <h1>OUR PRODUCTS</h1>
               <Row xs={12}  lg={3}>
                  {products.map(product => <Product
                  product={product}
                  key={product._id}></Product>)}
               </Row>

          </Container>
     );
};

export default Products;