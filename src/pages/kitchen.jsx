import React, { useState, useEffect } from 'react';
import { getOrder, updateOrder } from '../api/Products';
import { getId } from "../api/api"
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import { CartProvider } from '../Context/CartContext';

export default function Kitchen() {

  const [orders, setOrders] = useState([]);

  const handleClick = () => {
    updateOrder (getId(),{
      status: 'delivered',
      dateProcessed: new Date().toLocaleString('sv')
    }).then((res) => {
       console.log(res.data)
       })
     .catch()
    
  }

  // createOrder({
  //   client: values.clientName,
  //   userId: userActive.user.id,
  //   status: 'pending',
  //   dateEntry: new Date().toLocaleString('sv'),
  //   products: cartItems.map((e)=>{
  //     return {
  //       amount: e.amount,
  //       product: {
  //         dateEntry: new Date().toLocaleString('sv'),
  //         id: e.id,
  //         image: e.image,
  //         name: e.name,
  //         price: e.price,
  //         type: e.type
  //       }
  //     }
  //   })
  // }).then((res) => {
  //   console.log(res.data)
  // })
  // .catch()

  // let dateNow = new Date();
  // const upOrder = {
  //   userId: getId(),
  //   status: "delivered",
  //   dateProcessed:
  //     dateNow.getFullYear() +
  //     "-" +
  //     (dateNow.getMonth() + 1) +
  //     "-" +
  //     dateNow.getDate() +
  //     " " +
  //     dateNow.getHours() +
  //     ":" +
  //     dateNow.getMinutes(),
  // };
      
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
                <button className="btn btn-primary" onClick={handleClick}>READY TO DELIVER</button>
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
