import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth/useAuth';

const Login = () => {
     const { register, handleSubmit,formState: { errors } } = useForm();
     const {signInUser} = useAuth()
     const onSubmit = data => {
          console.log(data)
          signInUser(data.email,data.password)
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
                         <input placeholder="Email" {...register("email", { required: true })} />
                         
                         {errors.email && <span>This field is required</span>}

                         <input placeholder="Password" {...register("password", { required: true })} />
                         
                         {errors.password && <span>This field is required</span>}
                         
                         <input type="submit" />
               </form>  
               
          </>
     );
};

export default Login;