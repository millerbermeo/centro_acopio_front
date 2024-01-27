import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute({ canActivate, redirectPath = '/' }) {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (!canActivate || !token || !rol) {
    return <Navigate to={redirectPath} replace />;
  }

  // Puedes agregar más lógica aquí para verificar el rol específico si es necesario

  return <Outlet />;
}

export default ProtectedRoute;
