import React from 'react';
// import { Link } from 'react-router-dom';
import Login from '../components/Login.jsx';
import styles from '../components/stylesheets/App.module.css';

export default function Home() {

  return (
    <div className={styles.Home}>
      <h1 className={styles.Homeh1}>Home</h1>
      <Login />
      {/* <ol>
        <li><Link to="/menu">menu</Link></li>
        <li><Link to="/admin">admin</Link></li>
        <li><Link to="/kitchen">cocina</Link></li>
        <li><Link to="/orders">ordenes</Link></li>
      </ol> */}
    </div>
  )
}