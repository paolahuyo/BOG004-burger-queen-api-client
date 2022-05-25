import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    const { id } = item;

    return (
            <tr>
                <td scope="row">{item.name}</td>
                <td scope="row">{item.amount}</td>
                <td scope="row">${item.price*item.amount}</td>
                <td scope="row"><button onClick={()=> {addItemToCart(item)}}>ADD</button>
                <button onClick={()=> {deleteItemToCart(item)}}>DELETE</button></td>
            </tr>
    );
}

export default ItemCart;
