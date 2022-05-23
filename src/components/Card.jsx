import React from 'react';
import "../components/stylesheets/Cards.css";
import { products } from '../api/Products';
import { useEffect, useState } from "react";
import Cart from "./Cart.js";

function Cards({item, items}) {
	const [productos, setProductos] = useState([]);

	// cosntante que guarda las propiedades del estado de los productos
	const {id} = item;

	// Funcion para agregar los productos al cart
	const addProduct = id => {
		const item = items.filter((item) => item.id === id)
	}

	useEffect(() => {
		products()
		.then((response) =>{
		console.log(response.data);
		setProductos(response.data)
		})
		.catch(() =>{});
	}, []);

	return (
		<Cart>
		<div>
			{productos.map((producto)=>(
				<div className='each-card'>
				<ul className='items'>
					<div className='image-item'>
						<img src={producto.image} alt='Item'></img>
					</div>
					<li className='item-name'>{producto.name}</li>
					<li>Precio: ${producto.price}</li>
				</ul>
				<button className='add-btn' onClick={() => addProduct(id)}>Agregar al carrito</button>
			</div>
			))}
		</div>
		</Cart>
	);
}

export default Cards;
