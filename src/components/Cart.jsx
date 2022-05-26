import React, { useContext, useEffect, useState } from "react";
import takeAwayOrder from '../assets/order.png'
import CartContext from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css'
import ItemCart from "./ItemCart";

const Cart = () => {

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

    /* Obtenemos el precio total */
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);

    return (
        <div className={styles.cartContainer}>
            <div >
                <div className={styles.buttonCart}>
                    <img src={takeAwayOrder} alt="order icon" style={{ width: 100 }} />
                    <div>{productsLenght}</div>
                </div>
            </div>
            <div>
                <h2>Order Cart</h2>
                <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th scope="col">Producto:</th>
                        <th scope="col">Cantidad pedida:</th>
                        <th scope="col">Precio:</th>
                        <th scope="col">Opciones:</th>
                    </tr>
                </thead>
                {cartItems.length ===0 ? <thead><tr><th>Empty Cart</th></tr></thead> : (
                    <tbody>
                        {cartItems.map((item, i) => (
                        <ItemCart key={i} item={item}/>
                    ))}
                    </tbody>
                    )}
                    <tfoot>
                        <tr>
                            <th>Total: ${total}</th>
                        </tr>
                    </tfoot>
                    </table>
                    <button>SEND ORDER</button>
            </div>
        </div>
    );
}

export default Cart;