import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

const ItemCart = ({item}) => {
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);

    const { id } = item;

    return (
        <div>
            <div>
                <p>{item.name}</p>
                <p>{item.amount} ${item.price*item.amount}</p>
                <div>
                    <button onClick={()=> {addItemToCart(item)}}>ADD</button>
                    <button onClick={()=> {deleteItemToCart(item)}}>DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;