import { Navigate } from "react-router-dom";
import { useAccessControl } from "../hooks/useAccessControl";

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAccessControl();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}
