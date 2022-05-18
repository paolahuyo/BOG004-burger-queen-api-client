import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({
    users,
    redirectPath = '/',
    children,
  }) => {
    if (users) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

export default ProtectedRoute