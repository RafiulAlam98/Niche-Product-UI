import { useEffect, useState } from 'react';
import {  getAuth, 
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged,
          updateProfile
} from "firebase/auth";

import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';
import { useHistory, useLocation } from 'react-router';


initializeAuthentication()
const useFirebase = () =>{
     const [user,setUser] = useState({})
     const [isLoading,setIsLoading] = useState(true)
     const [authError, setAuthError] = useState('')
     // const location = useLocation();
     // const history = useHistory()
     // const redirectUrl = location.state?.from || '/home';
     const auth = getAuth()


     // register an user
     const registerUser = (name, email, password) => {
          setIsLoading(true)
          createUserWithEmailAndPassword(auth,email, password)
               .then((result) => {
               const user = result.user;
               console.log(user)
               setUser(user)
               // history.push(redirectUrl)
          })
          .catch((error) => {
               console.log(error.message);
               
          })
          .finally(()=>setIsLoading(false));
     }

     // login the user
     const signInUser = (email,password) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const user = result.user;
               setUser(user)
               // history.push(redirectUrl)
          })
          .catch((error) => {
               console.log(error.message);
          });
     }

     // currently signed in user
     useEffect(()=>{
          onAuthStateChanged(auth, (user) => {
               if (user) {             
                    setUser(user);                 
               } else {
                    setUser({})
               }
               setIsLoading(false)
             });
     },[])

     // sign Out user
     const signOutUser = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               
             }).catch((error) => {
               
             })
             .finally(() => setIsLoading(false));
     }


     return{
          user,
          authError,
          registerUser,
          signInUser,
          isLoading,
          signOutUser
     }

}

export default useFirebase