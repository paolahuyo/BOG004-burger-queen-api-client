import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    return (
            <tr>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.amount}</th>
                <th scope="row">${item.price*item.amount}</th>
                <th scope="row"><button onClick={()=> {addItemToCart(item)}}>ADD</button>
                <button onClick={()=> {deleteItemToCart(item)}}>DELETE</button></th>
            </tr>
    );
}

export default ItemCart;
