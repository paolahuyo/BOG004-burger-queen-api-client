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
<<<<<<< HEAD
  console.log(dataUser);
=======
>>>>>>> ce4621a4 (haciendo pull)

  return (
    <Router>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Home />}
          />
          { dataUser && dataUser.user.roles.admin  
            ? <Route path='/admin' element={<Admin />}/>
            : null
          }
          { dataUser && dataUser.user.roles.waiter
            ? <Route path='/waiter' element={<Waiter />}/>
            : null
          }
          { dataUser && dataUser.user.roles.chef
            ? <Route path='/kitchen' element={<Kitchen />}/>
            : null
          }
          <Route path='/orders' element={<Orders/>}/> 
=======
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>} />+
          <Route path='/waiter' element={<Waiter/>} />
          <Route path='/kitchen' element={<Kitchen/>} />
          <Route path='/orders' element={<Orders/>} />
         
>>>>>>> 79a71d55 (Creando funcion de ruteado)
          <Route element={<NotFound/>} />
        </Routes>
    </Router>
  );
}

export default router;