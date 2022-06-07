import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrder } from '../api/Products';
import styles from '../components/stylesheets/Waiter.module.css';
import NavBar from '../components/NavBar';

const OrdersReady = () => {
    
const [ordersCooked, setOrdersCooked] = useState([]);

const getOrdersCooked = () => {
    getOrder()
    .then((res) => {
        console.log('resdata',res.data)
        setOrdersCooked((res.data).filter((item)=> item.status.includes('delivered')))
        console.log('ordersCooked', ordersCooked);
      })
    .catch()
    }

    useEffect(() => {
      getOrdersCooked();
    }, [])

    const timeToDeliver = (info) => {
        const dateNow = info.dateProcessed;
        const dateOrder = info.dateEntry;
        const restTime = (Date.parse(dateNow) - Date.parse(dateOrder))/1000/60;
        return restTime;
      }

    if (ordersCooked !== undefined && ordersCooked[0] !== undefined)
    return (
        <>
        <NavBar></NavBar>
        <section className={styles.Box}>
            <h1>Orders Ready</h1>
            {ordersCooked.map((order) => (
            <section className='all-cards' key={order.id}>
            <div className='card wd-40'>
                <h3 className={styles.Orderstext}>ORDER #{order.id}</h3>
                <div className='card-body'>
                <h6 className={styles.Orderstext}>Client: {order.client}</h6>
                <p className={styles.Orderstext}>{order.status}</p>
                <p className={styles.Delivered}>Delivered: {order.dateProcessed}<br/>Cooking time: {timeToDeliver(order)} min</p>
                <p className={styles.Orderstext}> Created: {order.dateEntry}</p>
                <ul className="list-group list-group-flush">
                <h6 className={styles.Orderstext}>Products</h6>
                    {order.products.map((item) => (
                    <li className="list-group-item">{item.product.name} {item.amount} Un ${item.product.price}</li>
                    ))}
                </ul>
                </div>
            </div>
            </section>
            ))}
            <p>
            <Link to="/">Sign Out</Link>
            </p>
        </section>
        </>
        );
}

export default OrdersReady;