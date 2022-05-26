import React, { useState, useEffect } from 'react';
import { getOrder } from '../api/Products';
import { Link } from 'react-router-dom';
import styles from '../components/stylesheets/Waiter.module.css';

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
  if(orders !== undefined && orders[0] !== undefined)  console.log("test " + JSON.stringify(orders[0].products[0].product.price));
  return (
    <div className={styles.Bigbox}>
      <h1>Página de cocina</h1>
      <p>
        <Link to="/">Sign Out</Link>
      </p>
      {orders.map((order, i)=>(
        <div className='card' key={order.id}>
          <h2 className={styles.Orderstext}>ORDER</h2>
        <div className='card-body'>
            <p className={styles.Orderstext}>{order.client}</p>
            <p className={styles.Orderstext}>{order.status}</p>
            {order.dateProcessed &&  <p className={styles.Delivered}> Delivered: {order.dateProcessed}</p>}
            <p className={styles.Orderstext}> Created: {order.dataEntry}</p>
            <ul className="list-group list-group-flush">
              <li className={styles.Orderstext}>{order.products.qty}</li>
              <li className={styles.Orderstext}>{orders.products}</li>
              <li className={styles.Orderstext}>{orders[i].products[i].product.name} {orders[i].products[i].product.price}</li>
              <li className={styles.Orderstext}>{orders[1].products[1].product.name} {orders[1].products[1].product.price}</li>
            </ul>
            {!order.dateProcessed &&  <div className='card-body'>
              <a href="#" className='card-link'>READY TO DELIVER</a>
             </div>
            }

        
        </div>

        </div>
      ))}
    </div>
  );
}


{/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}