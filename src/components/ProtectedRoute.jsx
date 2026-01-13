// Language: JavaScript (Protected Route Guard)

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user, token } = useAuth();

  // Not logged in
  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  // Role mismatch
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
