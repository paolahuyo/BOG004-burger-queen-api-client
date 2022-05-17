import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from "../pages/login";
import Menu from "../pages/menu";
import Orders from "../pages/orders";
import Kitchen from "../pages/kitchen";
import Admin from "../pages/admin";
import NotFound from "../pages/notFound";

const router = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/menu' element={<Menu/>} />
          <Route path='/kitchen' element={<Kitchen/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/Admin' element={<Admin/>} />
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;