import React, { useContext, useEffect, useState } from "react";
import orderIcon from '../assets/order.png'
import takeAwayOrder from '../assets/take-away.png'
import CartContext from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css'
import ItemCart from "./ItemCart";

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
        <div className={styles.cartContainer}>
            <div 
            onClick={()=> setCartOpen(!cartOpen)}
            className={styles.buttonCartContainer}>
                <div className={styles.buttonCart}>
                    {!cartOpen ? (
                        <img src={orderIcon} alt="order icon" style={{ width: 100 }} />
                    ) : (
                        <img src={takeAwayOrder} alt="order icon" style={{ width: 100 }} />
                    ) }
                </div>
            </div>
                {!cartOpen && <div className={styles.productNumber}><p>{productsLenght}</p>
            </div>}


            {cartItems && cartOpen && (
                <div>
                    <h2>Order Cart</h2>
                    {cartItems.length ===0 ? <p> Empty Cart</p> : (
                        <div>{cartItems.map((item, i) => (
                            <ItemCart key={i} item={item}/>
                        ))}</div>
                        )}
                        <h2>Total: ${total} </h2>
                </div>
            )}
        </div>

    );
}

export default Cart;