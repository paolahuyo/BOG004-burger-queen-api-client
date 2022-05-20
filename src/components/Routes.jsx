import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "../pages/Home";
import Waiter from "../pages/Waiter";
import Kitchen from "../pages/Kitchen";
import Admin from "../pages/Admin";
import NotFound from "../pages/notFound";
import Orders from "../pages/Orders";
import { getLoggedUser } from "../api/api";

const router = () => {

  const dataUser = getLoggedUser();
  //const token = getToken();

 console.log(dataUser?.user);

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}
          />
          {/* { dataUser?.user.roles.admin
            ? <Route path='/admin' element={<Admin />}/>
            : null
          } */}
          <Route path='/admin' element={<Admin />}/>
          {/* { dataUser?.user.roles.waiter
            ? <Route path='/waiter' element={<Waiter />}/>
            : null
          } */}
          <Route path='/waiter' element={<Waiter />}/>
          {/* { dataUser?.user.roles.chef
            ? <Route path='/chef' element={<Kitchen />}/>
            : null
          } */}
          <Route path='/chef' element={<Kitchen />}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;