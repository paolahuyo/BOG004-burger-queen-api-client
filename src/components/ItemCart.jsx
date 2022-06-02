import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import plusIcon from '../assets/plus-white.png';

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    return (
            <tr>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.amount}</th>
                <th scope="row">${item.price*item.amount}</th>
                <th scope="row"><button className="btn btn-sm btn-success" onClick={()=> {addItemToCart(item)}}><span src={plusIcon}></span>Add</button>
                <button class="btn btn-sm btn-danger"  onClick={()=> {deleteItemToCart(item)}}>Delete</button></th>
            </tr>
    );
}

export default ItemCart;
