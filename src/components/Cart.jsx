import React, { useContext, useEffect, useState } from "react";
import orderIcon from '../assets/order.png'
import takeAwayOrder from '../assets/take-away.png'
import CartContext from '../Context/CartContext';

const Cart = () => {

    const [cartOpen, setCartOpen] = useState(false);
    const [productsLenght, setProductsLength] = useState(0);

    const { cartItems } = useContext(CartContext);

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems]);

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);


    return (
        <div>
            <div>
                {!cartOpen ? (
                    <img src={orderIcon} alt="order icon" style={{ width: 100 }} />
                ) : (
                    <img src={takeAwayOrder} alt="order icon" style={{ width: 100 }} />
                ) }
            </div>
            {!cartOpen && <div>
                <p>{productsLenght}</p>
                </div>}
        </div>

    );
}

export default Cart;