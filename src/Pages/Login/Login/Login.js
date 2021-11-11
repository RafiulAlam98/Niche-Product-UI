import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth/useAuth';

const Login = () => {
     const { register, handleSubmit,formState: { errors } } = useForm();
     const {signInUser} = useAuth()

     const location = useLocation();
     const history = useHistory();

     const onSubmit = data => {
          // console.log(data)
          signInUser(data.email, data.password, location, history)
     };
     return (
          <>
               <form onSubmit={handleSubmit(onSubmit)}>
                         <input placeholder="Email" {...register("email", { required: true })} />
                         
                         {errors.email && <span>This field is required</span>}

                         <input placeholder="Password" {...register("password", { required: true })} />
                         
                         {errors.password && <span>This field is required</span>}
                         
                         <input type="submit" />
               </form>  
               <Link to='/register'>
                    <h6>Not Yet Register? Register Now!</h6>
               </Link>
               
          </>
     );
};

export default Login;