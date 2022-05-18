import React from 'react';
import Routes from './components/routes.js';
import styles from './components/stylesheets/App.module.css';
// import logo from './assets/logo-burger-queen.png';
// import NavBar from './components/NavBar.jsx';
//import { Link } from 'react-router-dom';

const App = () => {
 return (
    <div className={styles.App}>
      {/* <NavBar /> */}
      <header className={styles.AppHeader}>
        {/* <img src={logo} className={styles.AppLogo} alt="logo" /> */}
        {/* <p>
          Burger Queen App
        </p>
        <Link to={`/admin`}>Admin Panel</Link>
        <a
          className={styles.AppLink}
          href=" "
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin Panel
        </a> */}
        <Routes />
      </header>
        
    </div>
 )
}
export default App;    

// {
//   "email": "grace.hopper@systers.xyz",
//   "password": "123456"
// }