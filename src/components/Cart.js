import {useState} from "react";
import products from "../api/Products";
import { products } from '../api/Products';

const Cart = ({id}) => {
    const [cart, setCart]= useState([]);
    return(
        
        <div>
            
            <h3>Carrito</h3>
            {cart.length === 0 ? ("No hay productos agregados") : (cart.map((products =>)))}
        </div>

    )
}

export default Cart;