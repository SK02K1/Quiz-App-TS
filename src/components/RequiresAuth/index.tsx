import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts';

export const RequiresAuth = () => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace={true} />
  );
};
