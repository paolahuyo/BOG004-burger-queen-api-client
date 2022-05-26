import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartProvider } from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';
import Card from '../components/Card';
import Cart from '../components/Cart';
import { createOrder } from '../api/Products'

export default function Waiter() {

  const clientRef = useRef();
  const [values, setValues] = useState({
      clientName: " "
  });

  const handleClient = (e) => {
    e.preventDefault();
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
      };
      setValues(newValues);
  }

  const pasarOrden = ({cartItems}) => {
    console.log('vamos bien');
    createOrder({
      client: values.clientName,
    }).then((res) => {
      console.log(res.data)
    })
    .catch()
  }

    return (
      <CartProvider>
        <div className={styles.Bigbox}>
          <div id='menu'>
            <img src={logo} className={styles.Logo} alt="logo" />
            <h1 className={styles.h1}>Menu</h1>
            <Card/>
          </div>
          <div className={styles.divRight}>
            <form id='client'>
                <label className={styles.p} htmlFor="client">Client Name: </label>
                <input className={styles.Input} type="text"
                  ref={clientRef}
                  id="clientName"
                  name='clientName'
                  placeholder='The Client Name'
                  value={values.clientName}
                  required
                  onChange={handleClient}
                  data-testid="test-client-name"
                />
                <button type="submit" className={styles.Button} onClick={handleClient}>Send</button>
            </form>
            {values.clientName && <p className={styles.p} ref={clientRef} aria-live="assertive" data-testid="client-name-message">Client: {values.clientName}</p>}
            <Cart pasarOrden={pasarOrden}/>
            <p><Link className={styles.Link} to="/">Sign Out</Link></p>
          </div>
        </div>
      </CartProvider>
    );
}

