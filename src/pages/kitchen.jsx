import React, { useState, useEffect } from 'react';
import { getOrder, updateOrder } from '../api/Products';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';
import { CartProvider } from '../Context/CartContext';

export default function Kitchen() {

  const [orders, setOrders] = useState([]);

  const getListOrders = () => {
    getOrder()
    .then((res) => {
      console.log(res.data)
      setOrders(res.data)
    })
    .catch()
  }

  const handleClick =  (id) => {
     updateOrder (id, {
      status: 'delivered',
      dateProcessed: new Date().toLocaleString('sv').slice(0,-3)
    }).then((res) => {
        getListOrders();
       console.log(res.data)
       })
     .catch()
  }

  useEffect(() => {
    getListOrders();
  }, [])

  const timeToDeliver = (info) => {
    const dateNow = info.dateProcessed;
    const dateOrder = info.dateEntry;
    const restTime = (Date.parse(dateNow) - Date.parse(dateOrder))/1000/60;
    return restTime;
  }

  if (orders !== undefined && orders[0] !== undefined)
  return (
    <CartProvider>
      <h1 className={styles.h1}>Kitchen</h1>
      <section className={styles.ContainerOrders}>
        <div className='card-deck'>
          {orders.map((order) => (
            <section key={order.id}>
              <div className='card' style={{ minWidth: 400, minHeight: 500, marginBottom: 20 }}>
                <h3 className={styles.Orderstext}>ORDER #{order.id}</h3>
                <div className='card-body'>
                  <h6 className={styles.Orderstext}>Client: {order.client}</h6>
                  <p className={styles.Orderstext}>{order.status}</p>
                  {order.dateProcessed && 
                  <p className={styles.Delivered}>Delivered: {order.dateProcessed}<br/>Cooking time: {timeToDeliver(order)} min</p>}
                  <p className={styles.Orderstext}> Created: {order.dateEntry}</p>
                  <ul className="list-group list-group-flush">
                  <h6 className={styles.Orderstext}>Products</h6>
                    {order.products.map((item) => (
                      <li className="list-group-item">{item.product.name} {item.amount} Un ${item.product.price}</li>
                    ))}
                  </ul>
                  {!order.dateProcessed &&
                  <div className='card-body'>
                    <button className="btn btn-primary" onClick={()=> handleClick(order.id)}>READY TO DELIVER</button>
                  </div>
                  }
                </div>
              </div>
            </section>
          ))}
          <div className={styles.SectionTotal}>
            <button className='btn btn-info btn-lg' style={{width:300, alignSelf:'center'}}><Link className={styles.Link} to="/">Sign Out</Link></button>
          </div>
        </div>
      </section>
    </CartProvider>
    );
}
