import React from 'react';
import { CartProvider } from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css';
import Card from '../components/Card';
import Cart from '../components/Cart';
import NavBar from '../components/NavBar';

export default function Waiter() {

    return (
      <CartProvider>
        <NavBar></NavBar>
        <div className={styles.Bigbox}>
          <div id='menu'>
            <h1 className={styles.h1}>Menu</h1>
            <Card data-testid="card-show"/>
          </div>
          <div className={styles.divRight}>
            <Cart/>
          </div>
        </div>
      </CartProvider>
    )
}

