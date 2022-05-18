import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';

export default function Waiter() {
  return (
    <div className={styles.Waiter}>
      <img src={logo} className={styles.Logo} alt="logo" />
      <h1 className={styles.h1}>Menu & Orders</h1>
      <p>
        <Link className={styles.Link} to="/">Home</Link>
      </p>
    </div>
  );
}

