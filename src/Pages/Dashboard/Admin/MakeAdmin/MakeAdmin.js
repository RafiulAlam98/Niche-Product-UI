import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from './../../../../hooks/useAuth/useAuth';

const MakeAdmin = () => {
     const {user} = useAuth()
     const { register, handleSubmit, reset, formState: { errors } } = useForm();


     const onSubmit = data => {
          reset(data)
          fetch(`https://polar-depths-02085.herokuapp.com/users/admin/${data.email}`, {
               method:'PUT',
               headers:{
                    'content-type': 'application/json'
               },
               body:JSON.stringify(data)
          })
          .then(res=>res.json())
          .then(data => {
               if(data.modifiedCount > 0){
                    alert('User Added Role as Admin')
               }
          })
          
     };


     return (
          <div>
               <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <input  {...register("email", { required: true })} />
                    
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" />
               </form>
          </div>
     );
};

export default MakeAdmin;