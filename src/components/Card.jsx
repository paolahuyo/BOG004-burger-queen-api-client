import React, { useContext, useEffect, useState } from 'react';
import "../components/stylesheets/Cards.css";
import CartContext, {CartProvider} from '../Context/CartContext';
import { callProducts } from "../api/Products"

function Card() {

	const {addItemToCart} = useContext(CartContext)
	const [products, setProducts] = useState([]);

	useEffect(() => {
		callProducts()
		.then((response) =>{
		console.log(response.data);
		setProducts(response.data)
		})
		.catch(() =>{});
	}, []);

	return (
		<CartProvider>
			<div className='all-cards'>
				{products.map((product)=>(
					<div className='each-card' key={product.id}>
					<ul className='items'>
						<div className='image-item'>
							<img className='img-product' src={product.image} alt='Item'></img>
						</div>
						<li className='item-name'>{product.name}</li>
						<li>Precio: ${product.price}</li>
					</ul>
					<button className='add-btn' onClick={() => addItemToCart(product)}>Add To Cart</button>
				</div>
				))}
			</div>
		</CartProvider>
	);
}

export default Card;
