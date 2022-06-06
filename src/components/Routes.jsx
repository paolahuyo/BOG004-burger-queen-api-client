import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import { getLoggedUser } from "../api/api";
import OrdersReady from "../pages/OrdersReady";

const router = () => {

  return (
    <Router>

        <Routes>

          <Route path='/' element={<Home />}/>

          <Route path='/admin' element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }/>

          <Route path='/waiter' element={
            <PrivateRoute role="waiter">
              <Waiter />
            </PrivateRoute>
          }/>

          <Route path='/kitchen' element={
            <PrivateRoute role="chef">
              <Kitchen />
            </PrivateRoute>
          }/>

          <Route path='/404' element={<NotFound/>} />

          <Route path='/ready-orders' element={<OrdersReady/>} />

        </Routes>
    </Router>
  );
}

const PrivateRoute = ({ children, role }) => {
  const authed = getLoggedUser();
  console.log(authed.user.roles);
    return authed.user.roles[role] ? children : <Navigate to="/404" />
}
export default router;