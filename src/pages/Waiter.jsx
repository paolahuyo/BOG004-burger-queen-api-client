import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';
import Orders from './Orders';

export default function Waiter() {
  return (
    <div className={styles.Waiter}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <h1 className={styles.h1}>Menu and Orders</h1>
      <p>
        <Orders />
        <Link className={styles.Link} to="/">Home</Link>
      </p>
    </div>
  );
}

