import React from 'react';
import { CartProvider } from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';
import Card from '../components/Card';
import Cart from '../components/Cart';

export default function Waiter() {

    return (
      <CartProvider>
        <div className={styles.Bigbox}>
          <div id='menu'>
            <img src={logo} className={styles.Logo} alt="logo" />
            <h1 className={styles.h1}>Menu</h1>
            <Card/>
          </div>
          <div className={styles.divRight}>
            <Cart/>
          </div>
        </div>
      </CartProvider>
    );
}

