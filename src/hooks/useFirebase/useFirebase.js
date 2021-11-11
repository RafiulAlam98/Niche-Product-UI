import { useEffect, useState } from 'react';
import {  getAuth, 
          createUserWithEmailAndPassword,
          signInWithEmailAndPassword,
          signOut,
          onAuthStateChanged,
          updateProfile
} from "firebase/auth";

import initializeAuthentication from './../../Pages/Login/Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () =>{

     const [user,setUser] = useState({})
     const [isLoading,setIsLoading] = useState(true)
     const [authError, setAuthError] = useState('')
     const auth = getAuth()


     // register an user
     const registerUser = (name, email, password,history) => {
          setIsLoading(true)
          createUserWithEmailAndPassword(auth,email, password)
               .then((result) => {
               console.log(result.user)
               const newUser = {email, displayName:name}
               setUser(newUser)

               // send name to firebase after creation

               updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {                    
                  }).catch((error) => {                    
                  });
               setAuthError('')
               history.push('/')
          })
          .catch((error) => {
               console.log(error.message);
               setAuthError(error.message)
               
          })
          .finally(()=>setIsLoading(false));
     }


     // login the user
     const signInUser = (email, password, location, history) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               history.replace(destination);

               setUser(result.user)
               setAuthError('')
               
          })
          .catch((error) => {
               console.log(error.message)
               setAuthError(error.message)
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