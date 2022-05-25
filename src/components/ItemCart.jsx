import React from 'react';

const ItemCart = ({item}) => {
    return (
        <div>{item.name} {item.amount} ${item.price}</div>
    );
}

export default ItemCart;