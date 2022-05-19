import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({
    dataUser,
    redirectPath = '/',
    children,
  }) => {
    if (!dataUser) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

export default ProtectedRoutes