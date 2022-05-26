<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { getOrder } from '../api/Products';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import { CartProvider } from '../Context/CartContext';
=======
import React, { useContext, useEffect, useState } from 'react';
import { getOrder } from '../api/Products';
>>>>>>> 08bbc92f (creando ordenes)

export default function Kitchen() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrder()
      .then((res) => {
        console.log(res.data)
        setOrders(res.data)
      })
      .catch()
  }, [])
  
  if (orders !== undefined && orders[0] !== undefined) console.log("test " + JSON.stringify(orders[0].products[0].product.price));
  return (
    <CartProvider>
      <section className={styles.Box}>
        <h1>Kitchen</h1>
        {orders.map((order) => (
          <section className='all-cards' key={order.id}>
          <div className='card wd-40'>
            <h3 className={styles.Orderstext}>ORDER #{order.id}</h3>
            <div className='card-body'>
              <h6 className={styles.Orderstext}>Client: {order.client}</h6>
              <p className={styles.Orderstext}>{order.status}</p>
              {order.dateProcessed && <p className={styles.Delivered}> Delivered: {order.dateProcessed}</p>}
              <p className={styles.Orderstext}> Created: {order.dateEntry}</p>
              <ul className="list-group list-group-flush">
              <h6 className={styles.Orderstext}>Products</h6>
                {order.products.map((item) => (
                  <li className="list-group-item">{item.product.name} {item.amount} Un ${item.product.price}</li>
                ))}
              </ul>
              {!order.dateProcessed &&
              <div className='card-body'>
                <button className="btn btn-primary">READY TO DELIVER</button>
              </div>
              }
            </div>
          </div>
          </section>
        ))}
        <p>
          <Link to="/">Sign Out</Link>
        </p>
      </section>
    </CartProvider>
    );
}
