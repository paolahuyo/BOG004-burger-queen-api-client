import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import takeAwayOrder from '../assets/order.png'
import CartContext from '../Context/CartContext';
import styles from '../components/stylesheets/Waiter.module.css'
import ItemCart from "./ItemCart";
import { createOrder } from "../api/Products";
import { getLoggedUser } from "../api/api";

const Cart = () => {
     /* Creamos un estado para obtener la cantidad de productos que tenemos en el carrito */
    const [productsLenght, setProductsLength] = useState(0);

    /* Traemos del context los productos del carrito */
    const { cartItems, resetCart }  = useContext(CartContext);

    /* Cada vez que se modifica el carrito, actualizamos la cantidad de productos */
    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems]);

    const goToCero = () => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous - current.amount, 0)
        )
    }

    // useEffect(() => {
    //     setProductsLength(
    //         cartItems.reduce((previous, current) => previous - current.amount, 0)
    //     )
    // }, [cartItems]);

    /* Obtenemos el precio total */
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0);
    const clientRef = useRef();
    const [values, setValues] = useState({
        clientName: " ",
    });

    const[ordersSended, setOrdersSended] = useState(false);
    
    const handleClient = (e) => {
      const newValues = {
        ...values,
        [e.target.name]: e.target.value,
        };
        setValues(newValues);
    }

    const transitOrder = ({cartItems}) => {
        const userActive = getLoggedUser();
          createOrder({
              client: values.clientName,
              userId: userActive.user.id,
              status: 'pending',
              dateEntry: new Date().toLocaleString('sv').slice(0,-3),
              products: cartItems.map((e)=>{
                return {
                  amount: e.amount,
                  product: {
                    dateEntry: new Date().toLocaleString('sv').slice(0,-3),
                    id: e.id,
                    image: e.image,
                    name: e.name,
                    price: e.price,
                    type: e.type
                  }
                }
              })
            }).then((res) => {
                setOrdersSended(true);
                setTimeout(() => {
                    setOrdersSended(false);
                }, 10000);
                console.log('order created',res.data)
            })
            .catch()
      }

      const GoToCeroProducts = () => {
		setProductsLength(0);
        setValues({
            clientName: " ",
        });
        resetCart();
		return console.log('cartItems', cartItems);
	}

    return (
        <div className={styles.cartContainer}>
            <div >
            <div className={styles.divRight}>
            <form id='client' style={{margin:20}}>
                <label className={styles.Label} htmlFor="client">Client Name: </label>
                <input className={styles.Input} type="text"
                  ref={clientRef}
                  id='clientName'
                  name='clientName'
                  placeholder= 'The Client Name'
                  value={values.clientName}
                  required
                  onChange={handleClient}
                  data-testid="test-client-name"
                />
            </form>
            {values.clientName && <p className={styles.p} ref={clientRef} aria-live="assertive" data-testid="client-name-message">Client: {values.clientName}</p>}
            </div>
                <div className={styles.buttonCart}>
                    <img src={takeAwayOrder} alt="order icon" style={{ width: 80 }} />
                    <p className={styles.p}># Products: {productsLenght } items</p>
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
                    {ordersSended && <p className={styles.Sent} aria-live="assertive" data-testid="sended-order-message">The order was sent to the kitchen</p>}
                    <button type="submit" className='btn btn-info btn-lg' onClick={ (e)=> {handleClient(e); transitOrder({cartItems}); GoToCeroProducts()} }>Send Order</button>
                    <div className={styles.SectionTotal}>
                        <button className='btn btn-info btn-lg' style={{width:300, alignSelf:'center'}}><Link className={styles.Link} to="/">Sign Out</Link></button>
                    </div>
            </div>
        </div>
    );
}

export default Cart;