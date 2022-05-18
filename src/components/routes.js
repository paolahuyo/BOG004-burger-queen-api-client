import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoutes';

import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";
import {getLoggedUser} from "../api/api";

const router = () => {

  const user = getLoggedUser();
  console.log(user);
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
            path='/admin' 
            element={
            <ProtectedRoute redirectPath="/" isAllowed={user && user.user.roles.admin}>
              <Admin/>
            </ProtectedRoute>}
          />
          <Route 
            path='/waiter' 
            element={
              <ProtectedRoute redirectPath="/" isAllowed={user && user.user.roles.waiter}>
                <Waiter />
              </ProtectedRoute>}
          /> 
          <Route 
          path='/kitchen'
          element={
            <ProtectedRoute redirectPath="/" isAllowed={user && user.user.roles.chef}>
              <Kitchen />
            </ProtectedRoute>} 
          />
          <Route path='/orders' element={<Orders/>}/> 
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;