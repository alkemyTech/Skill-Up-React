import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/loginContext";
// import { useAccessControl } from "../hooks/useAccessControl";

export function ProtectedRoute() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
