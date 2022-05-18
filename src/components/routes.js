import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoutes';

import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import Orders from "../pages/Orders";

const router = () => {
  return (
    <Router>
        <Routes>
          <Route 
            path='/' 
            element={<ProtectedRoute isAllowed={!!users}>
              <Home />
            </ProtectedRoute>}
          />
          <Route 
            path='/admin' 
            element={
            <ProtectedRoute isAllowed={!!users && users.roles.includes('admin')}>
              <Admin/>
            </ProtectedRoute>}
          />
          <Route 
            path='/waiter' 
            element={
              <ProtectedRoute isAllowed={!!users && users.roles.includes('waiter')}>
                <Waiter />
              </ProtectedRoute>}
          /> 
          <Route 
          path='/kitchen'
          element={
            <ProtectedRoute isAllowed={!!users && users.roles.includes('chef')}>
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