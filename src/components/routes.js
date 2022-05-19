import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes';

import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import { getLoggedUser } from "../api/api";

const router = () => {

  const dataUser = getLoggedUser();
  console.log(dataUser);
  // const [user, setUser] = useState({})
  // useEffect(()=> {
  //   setUser(getLoggedUser());
  // }, [getLoggedUser()]) 

  return (
    <Router>
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />
          <Route 
            path='/' 
            element={
            <ProtectedRoutes redirectPath="/admin" isAllowed={dataUser && dataUser.user.roles.admin}>
              <Admin/>
            </ProtectedRoutes>}
          />
          <Route 
            path='/' 
            element={
              <ProtectedRoutes redirectPath="/waiter" isAllowed={dataUser && dataUser.user.roles.waiter}>
                <Waiter />
              </ProtectedRoutes>}
          /> 
          <Route 
          path='/'
          element={
            <ProtectedRoutes redirectPath="/kitchen" isAllowed={dataUser && dataUser.user.roles.chef}>
              <Kitchen />
            </ProtectedRoutes>} 
          />
          <Route path='/orders' element={<Orders/>}/> 
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;