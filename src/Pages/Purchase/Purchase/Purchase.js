import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from './../../../hooks/useAuth/useAuth';

const Purchase = () => { 
     const { register, handleSubmit,reset, formState: { errors } } = useForm();
     const {carId} = useParams()
     // console.log(carId)
     const {user} = useAuth()
     const [products,setProducts] = useState([])
     const [singleProduct, setSingleProduct] = useState({})

     useEffect(()=>{
          fetch(`http://localhost:5000/products?carId=${carId}`)
          .then(res => res.json())
          .then(data => {
               // console.log(data)
               setProducts(data)
          })
     },[])

     const findProduct = products.find(product => product?._id === carId   )
     // console.log(findProduct)
     // setSingleProduct(findProduct)
     const onSubmit = data =>{ 

          fetch('http://localhost:5000/users',{
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data=>{
               console.log(data)
               if (data?.insertedId){
                    alert('User Added Successfully.')
                    reset(data)
               }
          })
         
          // console.log(data)
         
     };
    

     return (
          <>
                 <Container fluid>
                   <Row className="pb-5">

                    <div className="mt-3 mb-5">
                         <h4 className="">Purchase Information</h4>
                         <h1 className=""></h1>
                    </div>
               
                         <Col xs={12} md={6} lg={6}>
                              <img src={findProduct?.img} className="img-fluid rounded-2" alt="" /> 
                              <h5 className="head-col mt-2">{findProduct?.description}</h5>
                         </Col>
                         <Col xs={12} md={6} lg={6} >
                             
                              <h6 className="text-color">Brand: {findProduct?.name}</h6>
                              <h6 className="text-color">Model: {findProduct?.model}</h6>
                              <h5 className="head-col">Color: {findProduct?.color}</h5>
                              <h6 className="text-color">Fuel System: {findProduct?.fuel}</h6>
                              <h5 className="head-col">CC : {findProduct?.mile}</h5>
                              <h5 className="head-col">Type: {findProduct?.type}</h5>
                              <h6 className="text-color">Price: {findProduct?.price}</h6>
                         </Col>
                    </Row>
               </Container>

               <Container fluid className="container-body">
                    <Row>
                         <Col xs={12} md={12} lg={12} className="mb-5 mt-2">

                            
                              <form className="d-flex flex-column mt-5 justify-content-center mx-auto pb-4 px-5  form-container" onSubmit={handleSubmit(onSubmit)}>
                              <h3 className="mt-3 mb-4 head-col">Register For Booking</h3>
                                   <input className="mb-3" defaultValue={user.displayName} {...register("name",{ required: true }) } />

                                   {errors.name && <span>This field is required</span>}
                                   
                                   <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                              
                                   {errors.email && <span>This field is required</span>}

                                   <input className="mb-3" placeholder="Address Field" {...register("address", { required: true })} />

                                   {errors.address && <span>This field is required</span>}

                                   <input className="mb-3"  placeholder="Phone Number" {...register("phone", { required: true })} />

                                   {errors.phone && <span>This field is required</span>}

                                   <input className="mb-3"  defaultValue={findProduct?.name}  {...register("brand", { required: true })} />

                                   {errors.place && <span>This field is required</span>}

                                   <input className="mb-3" placeholder={"Status"}  defaultValue={"PENDING"}  {...register("status", { required: true })} />

                                   {errors.status && <span>This field is required</span>}
                                   
                                   <input type="submit" />
                                   
                              </form>
                         </Col>
                    </Row>
               </Container>
             
          </>
     );
};

export default Purchase;

