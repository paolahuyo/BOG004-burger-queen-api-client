import React from 'react';

const ItemCart = ({item}) => {
    return (
        <div>{item.name} {item.amount} ${item.price*item.amount}</div>
    );
}

export default ItemCart;