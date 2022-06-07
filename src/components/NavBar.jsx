import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-burger-queen.png';
import styles from '../components/stylesheets/Waiter.module.css';

const NavBar = () => {
  return (
    <div className="navbar navbar-dark sticky-top d-flex flex-row" style={{backgroundColor: '#17a2b8'}}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link active text-white" to="/waiter">Create Order</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/ready-orders">Orders Ready</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" to="/closed-orders">Orders Closed</Link>
        </li>
     </ul>
    </div>
  )
}

export default NavBar