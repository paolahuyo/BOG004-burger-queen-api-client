import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-burger-queen.png';
import styles from '../components/stylesheets/Waiter.module.css';
import '../components/stylesheets/BootstrapEdit.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark sticky-top d-flex flex-row" style={{backgroundColor: '#17a2b8'}}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <ul className="nav align-middle">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/waiter">Create Order</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/ready-orders">Orders Ready</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/closed-orders">Orders Closed</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/cancelled-orders">Orders Cancelled</Link>
        </li>
     </ul>
    </nav>
  )
}

export default NavBar