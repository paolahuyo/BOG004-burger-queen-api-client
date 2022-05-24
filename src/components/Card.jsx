import React from 'react';
import "../components/stylesheets/Cards.css";
import { products } from '../api/Products';
import { useEffect, useState } from "react";

import CartOrder from './CartOrder';

function Cards() {

	const [vSumTotal, setVSumTotal] = useState(0);
  	const [selectedProduct, setSelectedProduct] = useState([]);
	
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		products()
		.then((response) =>{
		console.log(response.data);
		setProductos(response.data)
		})
		.catch(() =>{});
	}, []);

	return (
		<div>
			<CartOrder
              selectedProduct={selectedProduct}
              vSumTotal={vSumTotal}
              setVSumTotal={setVSumTotal}
              setSelectedProduct={setSelectedProduct}
            />
			{productos.map((producto)=>(
				<div className='each-card' key={producto.id}>
				<ul className='items'>
					<div className='image-item'>
						<img src={producto.image} alt='Item'></img>
					</div>
					<li className='item-name'>{producto.name}</li>
					<li>Precio: ${producto.price}</li>
				</ul>
				<button className='add-btn' onClick={() => (selectedProduct.producto.price) (vSumTotal.producto.price)}>Agregar al carrito</button>
			</div>
			))}
		</div>
	);
}

export default Cards;
