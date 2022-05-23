import React from 'react';
import Routes from './components/Routes.jsx';
import styles from './components/stylesheets/App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
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