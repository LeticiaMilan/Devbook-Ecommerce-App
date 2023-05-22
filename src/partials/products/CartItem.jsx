import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onRemoveFromCart }) => {
    const { title, quantity, price } = item;
    const totalPrice = quantity * price;

    return (
        <div className="cart-item ">
            <h3>{title}</h3>
            <p>Quantity: {quantity}</p>
            <p>Price: {price}</p>
            <p>Total: {totalPrice}</p>
            <button onClick={() => onRemoveFromCart(item)}>Remove from Cart</button>
        </div>
    );
};

export default CartItem;