import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-burger-queen.png';

const NavBarAdmin = () => {
  return (
    <div className="navbar navbar-dark sticky-top d-flex flex-row" style={{backgroundColor: '#17a2b8'}}>
      <img src={logo} alt="logo" />
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/createUsers">Create Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/editUsers">Edit Users</Link>
        </li>
     </ul>
    </div>
  )
}

export default NavBarAdmin;