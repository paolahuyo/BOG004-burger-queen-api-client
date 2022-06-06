import React, { useContext, useEffect, useState } from "react";
import takeAwayOrder from '../assets/order.png'
import CartContext from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css'
import ItemCart from "./ItemCart";
import sendIcon from  '../assets/send-dish-kitchen.png'

const Cart = ({transitOrder}) => {

     /* Creamos un estado para obtener la cantidad de productos que tenemos en el carrito */
    const [productsLenght, setProductsLength] = useState(0);

    /* Traemos del context los productos del carrito */
    const { cartItems } = useContext(CartContext);

    /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems]);

    const GoToCeroProducts = () => {
		const initialState = setProductsLength(0);
		return console.log(initialState, 'initialState');
	}

    /* Obtenemos el precio total */
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div className={styles.cartContainer}>
            <div >
                <div className={styles.buttonCart}>
                    <img src={takeAwayOrder} alt="order icon" style={{ width: 80 }} />
                    <p className={styles.p}># Products: {productsLenght} items</p>
                </div>
            </div>
            <div>
                <h3>Order Cart</h3>
                <table className="table table-striped table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Product:</th>
                        <th scope="col">Quantity:</th>
                        <th scope="col">Price:</th>
                        <th scope="col">Options:</th>
                    </tr>
                </thead>
                {cartItems.length ===0 ? <thead><tr><th scope="row">Empty Cart</th></tr></thead> : (
                    <tbody>
                        {cartItems.map((item, i) => (
                        <ItemCart scope="col" key={i} item={item}/>
                    ))}
                    </tbody>
                    )}
                    <tfoot>
                        <tr>
                            <th scope="col">Total: ${total}</th>
                        </tr>
                    </tfoot>
                    </table>
                    <button className='btn btn-info btn-lg' onClick={()=>{transitOrder({cartItems}); GoToCeroProducts();}}>Send Order</button>
            </div>
        </div>
    );
}

export default Cart;