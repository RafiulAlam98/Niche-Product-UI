import React, { useEffect, useState } from 'react';

import Admin from '../Admin/Admin/Admin';
import User from './../User/User/User';
import useAuth from './../../../hooks/useAuth/useAuth';

const DashboardHome = () => {
     const {admin} = useAuth()
     console.log(admin)
     return (
          <> 
               {
                    admin?
                    <Admin></Admin>
               :
               <User></User>  }   
          </>
     );
};

export default DashboardHome;