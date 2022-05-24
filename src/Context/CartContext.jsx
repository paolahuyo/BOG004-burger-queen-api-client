import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { getToken } from '../api/api';

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("http://localhost:8080/products", {headers: {authorization: "Bearer " + getToken()}})
      .then(({ data }) => setProducts(data.products));
  };

    const addItemToCart = (product) => {
        const inCart = cartItems.find(
        (productInCart)=> productInCart.id === product.id
        );
        if(inCart){
            setCartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === product.id){
                        return{... inCart, amount:inCart.amount + 1};
                    } else return productInCart;
                })
            );
        } else {
        setCartItems([... cartItems,{... product, amount:1}]);
        }
    }

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart.amount === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                    if(productInCart.id === product.id ) {
                        return {...inCart, amount: inCart.amount - 1}
                    } else return productInCart
                }));
            }
    };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart, editItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;