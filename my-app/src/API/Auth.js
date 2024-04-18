import { Navigate, Outlet, useLocation } from "react-router-dom";

function Auth({loginState, logOut}) {
  const location = useLocation();

  return loginState ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export default Auth;
