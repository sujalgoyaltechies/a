import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

function UserPrivate() {
    
  const userauth = Cookies.get('usertoken') 
  return (
    
    userauth ? <Outlet /> : <Navigate to="/login" />
    
  )
}

export default UserPrivate