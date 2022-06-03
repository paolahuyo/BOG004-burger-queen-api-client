import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';
import plusIcon from '../assets/plus-white.png';
import minusIcons from "../assets/minus-sign.png";

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    return (
            <tr>
                <th scope="row">{item.name}</th>
                <th scope="row">{item.amount}</th>
                <th scope="row">${item.price*item.amount}</th>
                <th scope="row"><button className="btn btn-sm btn-success" onClick={()=> {addItemToCart(item)}}>Add <img src={plusIcon} alt="btn plus" style={{width:15, alignSelf:'center'}} /> </button>
                <button class="btn btn-sm btn-danger"  onClick={()=> {deleteItemToCart(item)}}>Delete <img src={minusIcons} alt="btn plus" style={{width:15, alignSelf:'center'}} /></button></th>
            </tr>
    );
}

export default ItemCart;
