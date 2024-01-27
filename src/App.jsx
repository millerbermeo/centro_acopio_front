import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import WastePage from './pages/WastePage';
import MovementsPage from './pages/MovementsPage';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectecRoute';
import { Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import UsersPage from './pages/UsersPage';
import ActivityPage from './pages/ActivityPage';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.getItem('token') ? <Navigate to="/home" /> : <Login />
        }
      />

      <Route
        element={
          <ProtectedRoute
            canActivate={true} // Puedes ajustar esto según tus necesidades
            redirectPath="/"
          />
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/residuos" element={<WastePage />} />
        <Route path="/movimientos" element={<MovementsPage />} />
        <Route path="/usuarios" element={<UsersPage />} />
        <Route path="/actividades" element={<ActivityPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
