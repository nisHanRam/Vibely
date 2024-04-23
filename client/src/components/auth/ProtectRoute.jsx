import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, isLoggedIn, redirect = "/login" }) => {
  if (!isLoggedIn) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectRoute;
