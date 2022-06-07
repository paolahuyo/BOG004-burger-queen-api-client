import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrder, updateOrder } from '../api/Products';
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

      const handleClosed =  (id) => {
        updateOrder (id, {
         status: 'closed',
       }).then((res) => {
            getOrdersCooked();
            console.log(res.data)
          })
        .catch()
     }

    if (ordersCooked !== undefined && ordersCooked[0] !== undefined)
    return (
        <>
        <NavBar></NavBar>
        <h1 className={styles.h1}>Orders Ready</h1>
        <div className='card-deck'>
            {ordersCooked.map((order) => (
            <section key={order.id}>
                <div className='card' style={{ minWidth: 400, minHeight: 500, marginBottom: 20 }}>
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
                    <div className='card-body'>
                        <button className="btn btn-primary" onClick={()=> handleClosed(order.id)}>TO DELIVER</button>
                    </div>
                    </div>
                </div>
            </section>
            ))}
            <div className={styles.SectionTotal}>
                <button className='btn btn-info btn-lg' style={{width:300, alignSelf:'center'}}><Link className={styles.Link} to="/">Sign Out</Link></button>
            </div>
        </div>
        </>
        );
}

export default OrdersReady;