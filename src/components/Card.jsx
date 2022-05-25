import React from 'react';
import "../components/stylesheets/Cards.css";
<<<<<<< HEAD
import CartContext, {CartProvider} from '../Context/CartContext';
import { callProducts } from "../api/Products"
import { useContext, useEffect, useState } from "react";

function Card() {

	const {addItemToCart} = useContext(CartContext)
	const [products, setProducts] = useState([]);

=======
import { products } from '../api/Products';
import { useEffect, useState } from "react";

import CartOrder from './CartOrder';

function Cards() {

	const [vSumTotal, setVSumTotal] = useState(0);
  	const [selectedProduct, setSelectedProduct] = useState([]);
	
	const [productos, setProductos] = useState([]);

>>>>>>> 178100afbc144f0bfdd3c8e027ad51b481a3282e
	useEffect(() => {
		callProducts()
		.then((response) =>{
		console.log(response.data);
		setProducts(response.data)
		})
		.catch(() =>{});
	}, []);

	return (
<<<<<<< HEAD
		<CartProvider>
			<div className='all-cards'>
				{products.map((product)=>(
					<div className='each-card' key={product.id}>
					<ul className='items'>
						<div className='image-item'>
							<img src={product.image} alt='Item'></img>
						</div>
						<li className='item-name'>{product.name}</li>
						<li>Precio: ${product.price}</li>
					</ul>
					<button className='add-btn' onClick={() => addItemToCart(product)}>Add To Cart</button>
				</div>
				))}
			</div>
		</CartProvider>
=======
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
>>>>>>> 178100afbc144f0bfdd3c8e027ad51b481a3282e
	);
}

export default Card;
