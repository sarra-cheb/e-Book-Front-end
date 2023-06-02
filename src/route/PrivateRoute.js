import React from 'react'
import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { toast } from 'react-toastify';
const isExpiredToken = (token) => {
  const decoded = jwt_decode(token);
  return Math.floor(new Date().getTime() / 1000) >= decoded.exp
}
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const role = localStorage.getItem('role')
  if (token !== null) {
    const expire = isExpiredToken(token)
    if (expire) {
      alert('you must be connected , please sign in to access to our library!')
      localStorage.removeItem('token')
      return <Navigate to='/login' />
    } else {
      if (role === 'admin') {
        return children;
      } else {
        toast.warning('you must be admin to access to this page')
      }
    }
  } else {
    localStorage.removeItem('token')
    return <Navigate to='/login' />
  }
}
export default PrivateRoute