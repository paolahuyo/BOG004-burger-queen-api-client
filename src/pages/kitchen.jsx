import React, { useContext, useEffect, useState } from 'react';
import { getOrder } from '../api/Products';

export default function Kitchen() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
		getOrder()
		.then((response) =>{
      console.log(response.data);
      setOrders(response.data)
		})
		.catch(() =>{});
	}, []);


  return (
    <div className="container">
      {orders.map((orders)=>(
					<div className='each-card' key={orders.id}>
					<ul className='items'>
						<div className='image-item'>
							<img src={orders.image} alt='Item'></img>
						</div>
						<li className='item-name'>{orders.name}</li>
						<li>Precio: ${orders.price}</li>
					</ul>
				</div>
				))}
    </div>
  );
}