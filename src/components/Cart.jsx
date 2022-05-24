import React, { useContext, useEffect, useState } from "react";
import orderIcon from '../assets/order.png'
import takeAwayOrder from '../assets/take-away.png'
import CartContext from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css'
import ItemCart from "./ItemCart";

const Cart = () => {

     /* Creamos 2 estados, uno para ver si el carrito esta abierto o no 
  y otro para obtener la cantidad de productos que tenemos en el carrito */
    const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    /* Traemos del context los productos del carrito */
    const { cartItems } = useContext(CartContext);

    /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems]);

    /* Obtenemos el precio total */
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div className={styles.cartContainer}>
            <div 
            onClick={()=> setCartOpen(!cartOpen)}
            className={styles.buttonCartContainer}>
                <div className={styles.buttonCart}>
                    <img src={takeAwayOrder} alt="order icon" style={{ width: 100 }} />
                </div>
            </div>
            <div>
                <h2>Order Cart</h2>
                {cartItems.length ===0 ? <p> Empty Cart</p> : (
                    <div>{cartItems.map((item, i) => (
                        <ItemCart key={i} item={item}/>
                    ))}</div>
                    )}
                    <h2>Total: ${total} </h2>
                    <button>SEND ORDER</button>
            </div>
        </div>
    );
}

export default Cart;