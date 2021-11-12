import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
          const { register, handleSubmit, formState: { errors } } = useForm();


          const onSubmit = data =>{
               console.log(data)
               fetch('https://polar-depths-02085.herokuapp.com/add/products', {
                    method:'POST',
                    headers:{
                         'content-type':'application/json'
                    },
                    body:JSON.stringify(data)

               })
               .then(res => res.json())
               .then(data => {
                    if(data.insertedId){
                         alert("New Product Added Successfully.")
                    }
               })
          };



     return (
          <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mx-5 w-50">
         
        
     
          <input placeholder="name" {...register("name", { required: true })} />
         
          <input placeholder="description" {...register("description", { required: true })} />
         
          <input placeholder="fuel" {...register("fuel", { required: true })} />
         
          <input placeholder="mile" {...register("mile", { required: true })} />
         
          <input placeholder="price" {...register("price", { required: true })} />
         
          <input placeholder="type" {...register("type", { required: true })} />
         
          <input placeholder="color" {...register("color", { required: true })} />
         
          <input placeholder="model" {...register("model", { required: true })} />
         
          <input placeholder="img" {...register("img", { required: true })} />
         
         
          
          <input type="submit" />
        </form>
     );
};

export default AddProducts;