import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const addItemToCartTest = (cartItems, product) => {
    const inCart = cartItems.find(
    (productInCart)=> productInCart.id === product.id
    );
    if(inCart){
            return cartItems.map((productInCart)=>{
                if(productInCart.id === product.id){
                    return{...inCart, amount:inCart.amount + 1};
                } else return productInCart;
            })
    } else {
        return [...cartItems,{...product, amount:1}];
    }
}



export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState (() => {
        try {
            const productsLocalStorage = localStorage.getItem('cartProducts');
            return productsLocalStorage ? JSON.parse(productsLocalStorage) : [];
        } catch (err) {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));
        //console.log(cartItems);
    }, [cartItems]);

    const resetCart = () => {
        setCartItems([]);
    }

    const addItemToCart = (product) => {
        const newState = addItemToCartTest(cartItems, product)
       
        setCartItems(newState);
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
        <CartContext.Provider value = {{cartItems, addItemToCart, deleteItemToCart, resetCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;