// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

const isAuthenticated = true; // Simulate login

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
