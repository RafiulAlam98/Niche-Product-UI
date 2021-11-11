import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Register = () => {
          const { register, handleSubmit,reset,formState: { errors } } = useForm();
          const history = useHistory()

          const {registerUser} = useAuth()

          const onSubmit = data => {
               console.log(data.email,data.password,data.name)
               registerUser(data.name, data.email, data.password, history)
               reset(data)
          };
     return (
          <>
               <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input placeholder="Name" {...register("name", { required: true })} />
                    
                    {errors.name && <span>This field is required</span>}
                 
                    <input placeholder="Email" {...register("email", { required: true })} />
                    
                    {errors.email && <span>This field is required</span>}

                    <input placeholder="Password" {...register("password", { required: true })} />
                    
                    {errors.password && <span>This field is required</span>}
                    
                    <input type="submit" />
               </form>

               <Link to='/login'>
                    <h6>Already Register?</h6>
               </Link> 
          </>
     );
};

export default Register;