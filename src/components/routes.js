import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/waiter' element={<Waiter/>} />
          <Route path='/kitchen' element={<Kitchen/>} />
          <Route path='/orders' element={<Orders/>} />
         
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;