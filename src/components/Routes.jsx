import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/NotFound";
import { getLoggedUser } from "../api/api";
import OrdersReady from "../pages/OrdersReady";
import OrdersClosed from "../pages/OrdersClosed";
import OrdersCancelled from "../pages/OrdersCancelled";
import ViewUsers from "../pages/ViewUsers"

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
          <Route path='/closed-orders' element={<OrdersClosed/>} />
          <Route path='/cancelled-orders' element={<OrdersCancelled/>} />
          <Route path='/createUsers' element={<Admin/>} />
          <Route path='/viewUsers' element={<ViewUsers/>} />
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

