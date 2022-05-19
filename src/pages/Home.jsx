import React from 'react';
// import { Link } from 'react-router-dom';
import Login from '../components/Login.jsx';
import styles from '../components/stylesheets/Home.module.css';
import logo from '../assets/logo-burger-queen.png';

export default function Home() {

  return (
    <div className={styles.Home}>
      <img src={logo} className={styles.HomeLogo} alt="logo" />
      {/* <h1 className={styles.h1}>Home</h1> */}
      <Login />
    </div>
  )
}