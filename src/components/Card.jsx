import React from 'react';

const Card = (products) => {

	console.log("dd", products)
	return (
		<div>
			<p>Menu</p>
			<p>{products.name}</p>
            <img src={products.image}/>
			<p>Price: $ {products.price}</p>
			{/* <DiscountTag discount={props.discount}/> */}
			<br/>
			<br/>
			<br/>
		</div>
	)
}

export default Card;
