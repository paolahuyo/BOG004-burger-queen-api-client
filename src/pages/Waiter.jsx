import React, { useState, useRef } from 'react';
import { CartProvider } from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css';
import logo from '../assets/logo-burger-queen.png';
import Card from '../components/Card';
import Cart from '../components/Cart';
import { createOrder } from '../api/Products'
import { getLoggedUser } from '../api/api';

export default function Waiter() {

  const clientRef = useRef();
  const [values, setValues] = useState({
      clientName: " ",
      currentDate: new Date().toLocaleString()
  });

  const handleClient = (e) => {
    e.preventDefault();
    const newValues = {
      ...values,
      [e.target.name]: e.target.value,
      [e.target.currentDate]: e.target.value
      };
      setValues(newValues);
  }

  const transitOrder = ({cartItems}) => {

    const userActive = getLoggedUser();
      createOrder({
          client: values.clientName,
          userId: userActive.user.id,
          status: 'pending',
          dateEntry: new Date().toLocaleString('sv').slice(0, -3),
          products: cartItems.map((e)=>{
            return {
              amount: e.amount,
              product: {
                dateEntry: new Date().toLocaleString('sv').slice(0, -3),
                id: e.id, 
                image: e.image,
                name: e.name,
                price: e.price,
                type: e.type
              }
            }
          })
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
            <form id='client' style={{margin:20}}>
                <label className={styles.Label} htmlFor="client">Client Name: </label>
                <input className={styles.Input} type="text"
                  ref={clientRef}
                  id='clientName'
                  name='clientName'
                  placeholder='The Client Name'
                  value={values.clientName}
                  required
                  onChange={handleClient}
                  data-testid="test-client-name"
                />
                <button type="submit" className={styles.Button} onClick={handleClient}>Send Name</button>
            </form>
            {values.clientName && <p className={styles.p} ref={clientRef} aria-live="assertive" data-testid="client-name-message">Client: {values.clientName}</p>}
            <Cart transitOrder={transitOrder}/>
            <button className='btn btn-info btn-lg' style={{width:300, alignSelf:'center'}} to="/">Sign Out</button>
          </div>
        </div>
      </CartProvider>
    );
}

