import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    
    const token = JSON.parse(sessionStorage.getItem("token"));
  return token  ? children: <Navigate to="/login" />;
}
