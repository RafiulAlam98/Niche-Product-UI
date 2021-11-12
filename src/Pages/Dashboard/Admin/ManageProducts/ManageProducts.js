import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
     const [products, setProducts] = useState([])

     useEffect(()=>{
          fetch('https://polar-depths-02085.herokuapp.com/products')
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setProducts(data)
          })
     },[])
     return (
          <Container>
               <Row>
                   { 
                        products.map(product => <ManageProduct 
                        key={product._id}
                        product={product}
                        ></ManageProduct>)
                    } 
               </Row>
          </Container>
     );
};

export default ManageProducts;