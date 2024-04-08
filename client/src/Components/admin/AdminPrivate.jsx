import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';

function AdminPrivate() {
    
  const userauth = Cookies.get('admintoken') 
  return (
    
    userauth ? <Outlet /> : <Navigate to="/login" />
    
  )
}

export default AdminPrivate