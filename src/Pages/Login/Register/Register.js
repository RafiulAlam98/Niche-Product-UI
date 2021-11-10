import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth/useAuth';

const Register = () => {
          const { register, handleSubmit,reset,formState: { errors } } = useForm();

          const {registerUser} = useAuth()

          const onSubmit = data => {
               console.log(data.email,data.password,data.name)
               registerUser(data.email,data.password,data.name)
          };
     return (
          <>
               <form 
               sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
               }}
               onSubmit={handleSubmit(onSubmit)}>
                
                    <input placeholder="Name" {...register("name", { required: true })} />
                    
                    {errors.name && <span>This field is required</span>}
                 
                    <input placeholder="Email" {...register("email", { required: true })} />
                    
                    {errors.email && <span>This field is required</span>}

                    <input placeholder="Password" {...register("password", { required: true })} />
                    
                    {errors.password && <span>This field is required</span>}
                    
                    <input type="submit" />
               </form>  
          </>
     );
};

export default Register;