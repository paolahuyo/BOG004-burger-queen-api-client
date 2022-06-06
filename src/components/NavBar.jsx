import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-burger-queen.png';
import styles from '../components/stylesheets/Waiter.module.css';

const NavBar = () => {
  return (
    <div>
      <img src={logo} className={styles.Logo} alt="logo" />
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link class="nav-link active" to="/waiter">Create Order</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ready-orders">Orders Ready</Link>
        </li>
     </ul>
    </div>
  )
}

export default NavBar