import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from './../../../hooks/useAuth/useAuth';

const Purchase = () => { 
     const {carId} = useParams()
     console.log(carId)
     const {user} = useAuth()
     const [products,setProducts] = useState([])


     useEffect(()=>{
          fetch(`http://localhost:5000/products?carId=${carId}`)
          .then(res => res.json())
          .then(data => {
               console.log(data)
               setProducts(data)
          })
     },[])

     const findProduct = products.find(product => product?._id === carId   )
     console.log(findProduct)

     return (
          <div>
               <h1 className="text-primary">This is Purcahse Page</h1>
              <h2> {user.email}</h2>
               <h2>{findProduct?.name}</h2>
          </div>
     );
};

export default Purchase;