import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const addItemToCartTest = (cartItems, product) => {
<<<<<<< HEAD
=======
    console.log("cartItems",cartItems)
    console.log("product", product)
>>>>>>> 4431672c (creando nuevos test)
    const inCart = cartItems.find(
    (productInCart)=> productInCart.id === product.id
    );
    if(inCart){
        console.log("inCart")
            return cartItems.map((productInCart)=>{
                if(productInCart.id === product.id){
                    console.log("aqui si debe entrar", {...inCart, amount:inCart.amount + 1})
                    return{...inCart, amount:inCart.amount + 1};
                } else return productInCart;
            })
    } else {
<<<<<<< HEAD
        console.log("se va por donde no es")
=======
        console.log("camino malo")
>>>>>>> 4431672c (creando nuevos test)
        return [...cartItems,{...product, amount:1}];
    }
}

export const deleteItemToCartTest = (cartItems, product) => {
<<<<<<< HEAD
    console.log("cartItems",cartItems)
    console.log("product", product)
=======
>>>>>>> 4431672c (creando nuevos test)
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
<<<<<<< HEAD
        console.log("inCart")
        return cartItems.filter((productInCart) => productInCart.id !== product.id)
    } else {
            return cartItems.map((productInCart) => {
                if(productInCart.id === product.id ) {
                    console.log("aqui si debe entrar", {...inCart, amount:inCart.amount - 1})
=======
           return cartItems.filter((productInCart) => productInCart.id !== product.id)
    } else {
            return cartItems.map((productInCart) => {
                if(productInCart.id === product.id ) {
>>>>>>> 4431672c (creando nuevos test)
                    return {...inCart, amount: inCart.amount - 1}
                } else return productInCart
            });
        }
};

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
<<<<<<< HEAD
        //console.log('cartItems',cartItems);
=======
        console.log(cartItems);
>>>>>>> 4431672c (creando nuevos test)
    }, [cartItems]);

    const resetCart = () => {
        setCartItems([]);
    }

    const addItemToCart = (product) => {
        const newState = addItemToCartTest(cartItems, product)
       
        setCartItems(newState);
    }

    const deleteItemToCart = (product) => {
        const newState = deleteItemToCartTest(cartItems, product)

        setCartItems(newState);
    };

    return (
        <CartContext.Provider value = {{cartItems, addItemToCart, deleteItemToCart, resetCart}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;