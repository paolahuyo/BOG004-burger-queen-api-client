import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';

export default function Waiter() {
  return (
    <div className={styles.Waiter}>
      <h1 className={styles.h1}>Menu & Orders</h1>
      <p>
        <Link className={styles.Link} to="/">Home</Link>
      </p>
    </div>
  );
}

