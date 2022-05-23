import React from 'react';
import "../components/stylesheets/Cards.css";
import { callProducts } from '../api/Products';
import { useEffect, useState } from "react";

function Card() {

	const [products, setProducts] = useState([]);

	// constante que guarda las propiedades del estado de los productos
	// const {id} = item;

	// Funcion para agregar los productos al cart
	// const addProduct = id => {
	// 	const item = items.filter((item) => item.id === id)
	// }

	useEffect(() => {
		callProducts()
		.then((response) =>{
		console.log(response.data);
		setProducts(response.data)
		})
		.catch(() =>{});
	}, []);

	return (
		<div>
			{products.map((product)=>(
				<div className='each-card'>
				<ul className='items'>
					<div className='image-item'>
						<img src={product.image} alt='Item'></img>
					</div>
					<li className='item-name'>{product.name}</li>
					<li>Precio: ${product.price}</li>
				</ul>
				<button className='add-btn'>Agregar al carrito</button>
			</div>
			))}
		</div>
	);
}

export default Card;
